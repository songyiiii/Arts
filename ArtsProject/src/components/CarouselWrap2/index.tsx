import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import slide2 from '../../assets/image/slide2.jpg';
import { CarouselWrap2Styled } from './styled';

const CarouselWrap2 = () => {
    // console.log(slide, 'tmffkdlem');
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    return (
        <CarouselWrap2Styled>
            <Swiper>
                <SwiperSlide>
                    <div className="mainSlide">
                        <div className={`title ${isHovered ? 'hovered' : ''}`}>
                            <h1>2024 SEOUL ARTFAIR</h1>
                            <h3>August 13 - August 30</h3>
                            <h3>Coex, Seoul</h3>
                        </div>
                        <ul
                            className="info"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* 많은 li 요소들 */}
                            {Array.from({ length: 10 }, (_, i) => (
                                <li key={i}>Item {i + 1}</li>
                            ))}
                        </ul>
                        <div className="company"></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </CarouselWrap2Styled>
    );
};
export default CarouselWrap2;
