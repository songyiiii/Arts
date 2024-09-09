import React, { useState } from 'react';
import { CardListStyled } from './styled';

interface CardsProps {
    imageSrc: string;
    galleryName: string;
    exhibitionName: string;
}

const CardList = ({ imageSrc, galleryName, exhibitionName,  }: CardsProps) => {
    const [hover, setHover] = useState(false);

    return (
        <CardListStyled
            // className="sliderContainer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* 첫 번째 슬라이드는 별도로 고정 */}
            <div className="fixed">
                <img src={imageSrc} alt="Fixed Slide" className="image" />
            </div>

            {/* 슬라이드 안에 같은 이미지를 반복해서 넣음 */}
            <div className={`slider ${hover ? 'hovered' : ''}`}>
                {Array(7).fill(null).map((_, index) => (
                    <div className="slide" key={index}>
                        <img
                            src={imageSrc}
                            alt={`Slide ${index + 1}`}
                            className="image"
                        />
                    </div>
                ))}
                {/* 마지막 빈 슬라이드에 텍스트 넣기 */}
                <div className="slide">
                    <div className="text">
                        <p>{galleryName}</p>
                        <p>{exhibitionName}</p>
                    </div>
                </div>
            </div>
        </CardListStyled>
    );
};

export default CardList;
