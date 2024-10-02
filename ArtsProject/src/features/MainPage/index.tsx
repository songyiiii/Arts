import { MainPageStyled } from './styled';
import React, { useEffect, useRef, useState } from 'react';
import MainArtists from '@/components/MainArtists';
import CarouselWrap2 from '@/components/CarouselWrap2';
import Exhibition from '@/components/\bExhibition';


const MainPage = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    //가시성 체크
    const [visibleSections, setVisibleSections] = useState<Record<number, boolean>>({});

    
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        const updatedVisibleSections: Record<number, boolean> = {};
        //sectionRefs에 저장된 각 섹션을 돌면서 가시성 체크
        sectionRefs.current.forEach((section, index) => {
            if (section) {
                //section.getBoundingClientRect() 각 섹션의 화면 상 위치를 가져옴
                const rect = section.getBoundingClientRect();
                //rect.top: 해당 섹션의 상단이 화면의 위쪽에서 얼마나 떨어져있는지
                //rect.bottom: 해당 섹션의 하단이 화면의 위쪽에서 얼마나 떨어져있는지
                //섹션의 상단이 화면 아래쪽에 있고, 하단이 화면 위쪽에 있을때 화면에 보인다고 판단
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                //각 섹션의 가시성을 index를 키로해서 객체에 저장
                updatedVisibleSections[index] = isVisible;
            }
        });
        //가시성을 상태에 저장하여 각 섹션이 화면에 보일때 show클래스를 적용시키게할 예정
        setVisibleSections(updatedVisibleSections);
    };

    useEffect(() => {
        // 스크롤 이벤트 등록
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => {
            window.removeEventListener('scroll', handleScroll); // 컴포넌트 언마운트 시 이벤트 제거
        };
    }, []);

    return (
        <MainPageStyled>
            <div
                className={`carousel-section ${visibleSections[0] ? 'show' : ''}`}
                ref={(el) => (sectionRefs.current[0] = el)}
            >
                <CarouselWrap2 />
            </div>

            <div
                className={`section artists ${visibleSections[1] ? 'show' : ''}`}
                ref={(el) => (sectionRefs.current[1] = el)}
            >
                <MainArtists />
            </div>
            <div
                className={`section cards ${visibleSections[2] ? 'show' : ''}`}
                ref={(el) => (sectionRefs.current[2] = el)}
            >
                <Exhibition />
            </div>
        </MainPageStyled>
    );
};

export default MainPage;
