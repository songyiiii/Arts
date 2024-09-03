import { CarouselStyled } from './styled';
// import React from 'react';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';




interface styleData {
    data: {id:number, name:string, src:{src:string}}
}

const Carousel = 
    ({ data }:styleData) => {
        console.log(data,'src')

        return (
            <CarouselStyled id={data.id}>
                <img src={data.src.src}   />
            </CarouselStyled>
        );
    }


export default Carousel;
