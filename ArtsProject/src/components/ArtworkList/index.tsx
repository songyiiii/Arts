import React, { useState } from 'react';
import { ArtworkListStyled } from './styled';
import { datas } from '../../utill/datas';
import ArtworkItem from '../ArtwrokItem';
import Category from '../Category';

const ArtworkList = () => {
    const [selectCategory, setSelectCategory] = useState<string | null>(null);

    const filterData = selectCategory
        ? datas.filter((data) => data.category === selectCategory)
        : datas;

    return (
        <>
            <Category onSelectCategory={setSelectCategory}></Category>
            <ArtworkListStyled>
                {filterData.map((x, i) => {
                    return (
                        <ArtworkItem
                            key={i}
                            title={x.title}
                            artist={x.artist.name}
                            price={x.price}
                            imgUrl={x.src.src}
                            id={x.id}
                        />
                    );
                })}
            </ArtworkListStyled>
        </>
    );
};
export default ArtworkList;
