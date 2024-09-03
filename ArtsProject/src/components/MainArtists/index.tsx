import React, { useRef, useEffect, useState } from 'react';
import { ArtistsStyled } from './styled';
import { artists, datas } from '@/utill/datas';
import MainArtistsImg from '../MainArtistsImg';
import MainArtistName from '../MainArtistsName';

const MainArtists = () => {
    //아티스트이름 들어갈 div태그 지정
    const artistsNameRef = useRef<HTMLDivElement | null>(null);
    //아티스트 이름 보여주기 여부
    const [visible, setVisible] = useState<Visible>({});
    //아티스트 이름 hovertl 이미지 경로 지정
    const [hoverName, setHoverName] = useState<string | null>(null);

    //이름 blink효과
    const nameAnimation = () => {
        const duration = Math.random() * 2 + 1; 
        const delay = Math.random() * 2; 
        return `${duration}s ${delay}s`;
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;

                const updatedVisible: Record<number, boolean> = {};
                artists.forEach((_, index) => {
                    updatedVisible[index] = isVisible;
                });

                setVisible(updatedVisible);
            },
            {
                threshold: [0.5], // 50%가 보이거나 50% 이하로 사라질 때 감지
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


    //이름 hover했을때 이미지 뜨게하기
    const NameHover = (artistName: string) => {
        const artistData = datas.find((data) => data.artist.name === artistName);
        if (artistData) {
            setHoverName(artistData.src.src);
        }
    };


    return (
        <ArtistsStyled>
            <h1 >Artists</h1>
            <div className='flexBox' ref={artistsNameRef}>
                <MainArtistName
                    artists={artists}
                    visible={visible}
                    onHover={NameHover}
                    nameAnimation={nameAnimation}
                />
                <MainArtistsImg hoverName={hoverName}/>
            </div>
        </ArtistsStyled>
    );
};

export default MainArtists;
