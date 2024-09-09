import { MapStyled } from './styled';
import { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        const kakaoMapScript = document.createElement('script');
        kakaoMapScript.async = false;
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=8d78361ec962a1cd527c9836d7792a36&libraries=services&autoload=false`;
        document.head.appendChild(kakaoMapScript);

        const onLoadKakaoAPI = () => {
            if (window.kakao && window.kakao.maps) {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map') as HTMLElement;
                    const options = {
                        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                        level: 3,
                    };
                    // 지도 생성
                    const map = new window.kakao.maps.Map(container, options);
                    window.kakao.maps.event.addListener(
                        map,
                        'click',
                        function (mouseEvent) {
                            // 클릭한 위치의 좌표 얻기
                            let latlng = mouseEvent.latLng;
                            let lat = latlng.getLat();
                            let lng = latlng.getLng();

                            // 카카오맵으로 이동할 URL 생성
                            let kakaoMapUrl = `https://map.kakao.com/link/map/${lat},${lng}`;
                            console.log('클릭한 좌표:', lat, lng);
                            console.log('카카오맵 URL:', kakaoMapUrl);

                            // 새로운 창에서 카카오맵으로 이동
                            window.open(kakaoMapUrl, '_blank');
                        }
                    );

                    // 주소-좌표 변환 객체
                    let geocoder = new window.kakao.maps.services.Geocoder();
                    let address = '서울 강남구 강남대로 396';
                    geocoder.addressSearch(
                        address,
                        function (result: { x: string; y: string }[], status: string) {
                            if (status === window.kakao.maps.services.Status.OK) {
                                let coords = new window.kakao.maps.LatLng(
                                    parseFloat(result[0].y),
                                    parseFloat(result[0].x)
                                );

                                // 지도의 중심을 결과값으로 이동
                                map.setCenter(coords);

                                // 변환된 좌표에 마커를 표시
                                let marker = new window.kakao.maps.Marker({
                                    map: map,
                                    position: coords,
                                });

                                console.log(
                                    `주소(${address})가 좌표로 변환됨: 위도(${result[0].y}), 경도(${result[0].x})`
                                );
                            } else {
                                console.error('주소 변환 실패:', status);
                            }
                        }
                    );
                });
            } else {
                console.error('Kakao Maps API가 로드되지 않았습니다.');
            }
        };

        kakaoMapScript.addEventListener('load', onLoadKakaoAPI);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.head.removeChild(kakaoMapScript);
        };
    }, []);

    return <MapStyled id="map"></MapStyled>;
};

export default Map;
