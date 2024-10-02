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
    const [artworkTitle, setArtworkTitle] = useState<string | null>(null); // 작품 제목 상태 추가

    // 아티스트 이름 hover 시 이미지 보여주기
    const NameHover = (artistName: string) => {
        const artistData = datas.find(
            (data) => data.artist.name === artistName
        );
        if (artistData) {
            setHoverName(artistData.src.src);
            setArtworkTitle(artistData.title);
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
    // console.log(animationTimings,'애니메이션타이밍')
    // 스크롤 이벤트로 아티스트 이름 가시성 체크
    useEffect(() => {
        const handleScroll = () => {
            if (artistsNameRef.current) {
                //artistsNameRef.current안의 모든 p요소 
                const elements = artistsNameRef.current.querySelectorAll('p');
                //각 요소의 가시 상태를 저장
                const updatedVisible: Record<number, boolean> = {};

                //p태그를 반복문을 돌면서 가시성 체크 
                elements.forEach((data, index) => {
                    //getBoundingClientRect() dom요소의 크기와 위치계산하는 메서드
                    const rect = data.getBoundingClientRect();
                    // console.log(rect,'렉트')
                    //rect.top: 요소 상단이 화면에서 얼마나 떨어져있는지
                    //rect.bottom: 요소 하단이 화면에서 얼마나 떨어져있는지
                    //window.innerHeight: 브라우저 창의 높이
                    const isVisible =
                    //rect.top = 0 이면 해당 요소의 상단이 브라우저 창의 상단과 일치하는것
                    //rect.top > 0 이면 요소의 상단이 브라우저 창의 아래쪽에 위치해있는것 즉 화면에 어느정도 노출되어있다는 뜻
                    //rect.top < 0 이면 요소의 상단이 화면 위로 사라져 보이지 않게 된 상태
                    //rect.bottom = window.innerHeight 해당 요소의 하단이 브라우저 창의 하단과 일치하는것
                    //rect.bottom < window.innerHeight 해당 요소의 하단이 브라우저 창 안에 있다는 의미
                    //rect.bottom > window.innerHeight 해당 요소의 하단이 화면 아래로 나가 보이지 않게 된 상태
                    //요소가 화면에 완전히 보이는지 여부를 확인하는 조건
                        rect.top >= 0 && rect.bottom <= window.innerHeight;
                    updatedVisible[index] = isVisible;
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
                    artworkTitle={artworkTitle}
                />
            </div>
        </MainArtistsStyled>
    );
};

export default MainArtists;
