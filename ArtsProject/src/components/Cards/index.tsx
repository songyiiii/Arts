import React from 'react';
import { CardsStyled } from './styled';
import { exhibition2, datas } from '../../utill/datas';
import CardList from '../CardList';

export const Cards = () => {
    // 전시 작가의 대표 이미지와 갤러리 정보를 추출
    const exhibitionNames = exhibition2.map((data) => data.name.name);
    const filterDatas = datas.filter((data) =>
        exhibitionNames.includes(data.artist.name)
    );
    
    return (
        <CardsStyled>
            <h1>EXHIBITION</h1>
            <div className='bgBox'></div>
            {exhibition2.map((exhibit, index) => {
                const filteredData = filterDatas.find((data) => data.artist.name === exhibit.name.name);
                return (
                    filteredData && (
                        <CardList
                            key={index}
                            imageSrc={filteredData.src.src}
                            galleryName={filteredData.artist.gallery.name}
                            exhibitionName={exhibit.title} // 전시명
                            exhibitionPeriod={exhibit.date} // 전시 기간
                        />
                    )
                );
            })}
        </CardsStyled>
    );
};
