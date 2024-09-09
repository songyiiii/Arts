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
            <div className="bgBox"></div>
            {exhibition2.map((x, index) => {
                console.log(x,'엑스ㅡ스슷')
                const filteredData = filterDatas.find(
                    (data) => data.artist.name === x.name.name
                );
                return (
                    filteredData && (
                        <CardList
                            key={x.title}
                            imageSrc={filteredData.src.src}
                            galleryName={
                                'gallery' in filteredData.artist
                                    ? filteredData.artist.gallery.name
                                    : 'N/A' // 갤러리 정보가 없을 경우 처리
                            }
                            exhibitionName={x.title} // 전시명
                        />
                    )
                );
            })}
        </CardsStyled>
    );
};
