import React, { useRef, useEffect, useState } from 'react';
import { MainArtistsStyled } from './styled';
import { artists, datas } from '@/utill/datas';
import MainArtistsImg from '../MainArtistsImg';
import MainArtistName from '../MainArtistsName';



const MainArtists = () => {
    // console.log(datas,'데이타스')
    //아티스트이름 들어갈 div태그 지정
    const artistsNameRef = useRef<HTMLDivElement | null>(null);
    // h1 요소 참조
    const h1Ref = useRef<HTMLHeadingElement | null>(null); 
    //아티스트 이름 보여주기 여부
    const [visible, setVisible] = useState<Record<number, boolean>>({});
    //아티스트 이름 hovertl 이미지 경로 지정
    const [hoverName, setHoverName] = useState<string | null>(null);
     // 스크롤 위치 저장
    const [scrollY, setScrollY] = useState<number>(0);

    //이름 blink효과
    const nameAnimation = () => {
        const duration = Math.random() * 2 + 1; 
        const delay = Math.random() * 1; 
        return `${duration}s ${delay}s`;
    };

    console.log(visible,'비지블')
    //아티스트 이름이 화면에 30% 이상 나타날 때 감지
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;

                const updatedVisible: Record<number, boolean> = {};
                console.log(updatedVisible,'업데이트비지블')
                artists.forEach((_, index) => {
                    updatedVisible[index] = isVisible;
                });
                //이름이 보여지거나 사라질때 업데이트
                setVisible(updatedVisible);
            },
            {
                // 50%가 보이거나 50% 이하로 사라질 때 감지
                threshold: [0.8], 
            }
        );

        if (artistsNameRef.current) {
            observer.observe(artistsNameRef.current);
        }

        return () => {
            if (artistsNameRef.current) {
                observer.unobserve(artistsNameRef.current);
            }
        };
    }, [artists]);

    //스크롤 이벤트를 감지하여 Y축 스크롤 값 추적
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            // console.log(scrollTop,'스크롤탑')
            setScrollY(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    //이름 hover했을때 이미지 뜨게하기 (find:첫번째로 동일한것만 반환)
    const NameHover = (artistName: string) => {
        const artistData = datas.find((data) => data.artist.name === artistName);
        if (artistData) {
            setHoverName(artistData.src.src);
        }
    };


    return (
        <MainArtistsStyled scrollY={scrollY}>
            <h1  ref={h1Ref}>Artists</h1>
            <div className='flexBox' ref={artistsNameRef}>
                <MainArtistName
                    artists={artists}
                    visible={visible}
                    onHover={NameHover}
                    nameAnimation={nameAnimation}
                />
                <MainArtistsImg hoverName={hoverName}/>
            </div>
        </MainArtistsStyled>
    );
};

export default MainArtists;
