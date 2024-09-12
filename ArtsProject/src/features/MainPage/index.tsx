import { MainPageStyled } from './styled';
import React, { useEffect, useRef, useState } from 'react';
import MainArtists from '@/components/MainArtists';
import CarouselWrap2 from '@/components/CarouselWrap2';
import Exhibition from '@/components/\bExhibition';


const MainPage = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleSections, setVisibleSections] = useState<Record<number, boolean>>({});

    
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        const updatedVisibleSections: Record<number, boolean> = {};
        sectionRefs.current.forEach((section, index) => {
            if (section) {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                updatedVisibleSections[index] = isVisible;
            }
        });
        setVisibleSections(updatedVisibleSections);
    };

    useEffect(() => {
        // 스크롤 이벤트 등록
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 렌더링 시 한 번 호출

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
