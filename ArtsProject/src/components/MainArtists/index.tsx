import React, { useRef, useEffect, useState } from 'react';
import { MainArtistsStyled } from './styled';
import { artists, datas } from '@/utill/datas';
import MainArtistsImg from '../MainArtistsImg';
import MainArtistName from '../MainArtistsName';


interface AnimationTimings {
    delay: string;
}

const MainArtists = () => {
    const artistsNameRef = useRef<HTMLDivElement | null>(null);
    const h1Ref = useRef<HTMLHeadingElement | null>(null);
    const [visible, setVisible] = useState<Record<number, boolean>>({});
    const [hoverName, setHoverName] = useState<string | null>(null);
    const [scrollY, setScrollY] = useState<number>(0);
    const [animationTimings, setAnimationTimings] = useState<
        Record<number, AnimationTimings>
    >({});
    // 아티스트 이름 hover 시 이미지 보여주기
    const NameHover = (artistName: string) => {
        const artistData = datas.find(
            (data) => data.artist.name === artistName
        );
        if (artistData) {
            setHoverName(artistData.src.src);
        }
    };
    // 애니메이션 딜레이를 처음에 한 번만 설정
    useEffect(() => {
        const timings: Record<number, AnimationTimings> = {};
        artists.map((_, index) => {
            const delay = `${Math.random() * 4}s`;
            timings[index] = { delay };
        });
        setAnimationTimings(timings);
    }, []);

    // 스크롤 이벤트로 아티스트 이름 가시성 체크
    useEffect(() => {
        const handleScroll = () => {
            if (artistsNameRef.current) {
                const elements = artistsNameRef.current.querySelectorAll('p');
                const updatedVisible: Record<number, boolean> = {};

                elements.forEach((data, index) => {
                    //getBoundingClientRect() dom요소의 크기와 위치계산하는 메서드
                    const rect = data.getBoundingClientRect();
                    console.log(rect,'렉트')
                    const isVisible =
                        rect.top >= 0 && rect.bottom <= window.innerHeight;
                    updatedVisible[index] = isVisible;
                    console.log(isVisible,'이즈비지블')
                });
                setVisible(updatedVisible);
                
            }
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // console.log(artistsNameRef,'알이에프')
    return (
        <MainArtistsStyled scrollY={scrollY}>
            <h1 ref={h1Ref}>Artists</h1>
            <div className="flexBox">
                <MainArtistName
                    artists={artists}
                    visible={visible}
                    animationTimings={animationTimings}
                    onHover={NameHover}
                    ref={artistsNameRef}
                />
                <MainArtistsImg
                    hoverName={hoverName}
                />
            </div>
        </MainArtistsStyled>
    );
};

export default MainArtists;
