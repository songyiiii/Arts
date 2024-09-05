import React, { useState } from 'react';
import img1 from '../../assets/image/category2.png';
import { CardListStyled } from './CardList';

export const CardList = () => {
    const images = [img1, img1, img1, img1];

    const [hover, setHover] = useState(false); // hover 상태 관리

    return (
        <CardListStyled>
            <div
                className="sliderContainer"
                onMouseEnter={() => setHover(true)} // hover 시 슬라이딩 시작
                onMouseLeave={() => setHover(false)} // hover 해제 시 원래 상태로 복귀
            >
                {/* 첫 번째 슬라이드는 별도로 고정 */}
                <div className="fixed">
                    <img src={img1.src} alt="Fixed Slide" className="image" />
                </div>

                {/* 나머지 슬라이드들은 슬라이드 안에 포함 */}
                <div className={`slider ${hover ? 'hovered' : ''}`}>
                    {images.slice(1).map((src, index) => (
                        <div className="slide" key={index + 1}>
                            <img
                                src={src.src}
                                alt={`Slide ${index + 2}`}
                                className="image"
                            />
                        </div>
                    ))}
                    {/* 마지막 빈 슬라이드에 텍스트 넣기 */}
                    <div className="slide">
                        <div className="text">전시 진행중인 갤러리 표시</div>
                    </div>
                </div>
            </div>
        </CardListStyled>
    );
};
