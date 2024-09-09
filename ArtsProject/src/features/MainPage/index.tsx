import { MainPageStyled } from './styled';
import React, { useEffect, useRef } from 'react';
import MainArtists from '@/components/MainArtists';
import CarouselWrap2 from '@/components/CarouselWrap2';
import { Cards } from '@/components/Cards';
import CircleCard from '@/components/CircleCard';

const MainPage = () => {
    const sectionRefs = useRef([]); // 여러 섹션을 참조하는 배열

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            },
            { threshold: 0.3 } // 20% 보이면 트리거
        );

        // DOM 요소만 observe
        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) observer.unobserve(section); // 요소가 null이 아닐 때만 unobserve
            });
        };
    }, []);

    return (
        <MainPageStyled>
            <div
                className="carousel-section"
                ref={(el) => (sectionRefs.current[0] = el)}
            >
                <CarouselWrap2 />
            </div>

            <div
                className="section artists"
                ref={(el) => (sectionRefs.current[1] = el)} // 배열의 첫 번째 요소로 할당
            >
                <MainArtists />
            </div>
            <div className="box"></div>
            <div
                className="section cards"
                ref={(el) => (sectionRefs.current[2] = el)} // 배열의 두 번째 요소로 할당
            >
                {/* <Cards /> */}
            </div>
            <div
                className="section cards"
                ref={(el) => (sectionRefs.current[3] = el)}
            >
                <CircleCard />
            </div>
        </MainPageStyled>
    );
};

export default MainPage;
