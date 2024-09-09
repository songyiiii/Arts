// global.d.ts

interface KakaoMap {
    maps: {
        Marker: any;
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => {
            getLat: () => number;
            getLng: () => number;
        };
        Map: new (container: HTMLElement, options: any) => any;
        event: {
            addListener: (
                map: any,
                event: string,
                callback: (event: any) => void
            ) => void;
        };
        services: {
            Geocoder: new () => {
                addressSearch: (
                    address: string,
                    callback: (result: { x: string; y: string }[], status: string) => void
                ) => void;
            };
            Status: {
                OK: string;
            };
        };
    };
}

interface Window {
    kakao: KakaoMap;
}
