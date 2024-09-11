import { MapStyled } from './styled';
import { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        const kakaoMapScript = document.createElement('script');
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=8d78361ec962a1cd527c9836d7792a36&libraries=services&autoload=false`;
        document.head.appendChild(kakaoMapScript);

        const onLoadKakaoAPI = () => {
            if (window.kakao && window.kakao.maps) {
                //지도생성 및 클릭이벤트 설정
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map') as HTMLElement;
                    const map = new window.kakao.maps.Map(container, {
                        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                        level: 2,
                    });

                    window.kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
                        const latlng = mouseEvent.latLng;
                        const kakaoMapUrl = `https://map.kakao.com/link/map/${latlng.getLat()},${latlng.getLng()}`;
                        console.log('카카오맵 URL:', kakaoMapUrl);
                        window.open(kakaoMapUrl, '_blank');
                    });

                    //주소를 좌표로 변환하고 해당 좌표에 마커 표시
                    const geocoder = new window.kakao.maps.services.Geocoder();
                    const address = '서울 강남구 강남대로 396';
                    geocoder.addressSearch(address, (result, status) => {
                        if (status === window.kakao.maps.services.Status.OK) {
                            const coords = new window.kakao.maps.LatLng(parseFloat(result[0].y), parseFloat(result[0].x));
                            map.setCenter(coords);
                            new window.kakao.maps.Marker({
                                map: map,
                                position: coords,
                            });
                        } else {
                            console.error('주소 변환 실패:', status);
                        }
                    });
                });
            } else {
                console.error('Kakao Maps API가 로드되지 않았습니다.');
            }
        };

        kakaoMapScript.addEventListener('load', onLoadKakaoAPI);

        return () => {
            document.head.removeChild(kakaoMapScript);
        };
    }, []);

    return <MapStyled id="map"></MapStyled>;
};

export default Map;
