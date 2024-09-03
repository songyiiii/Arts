import CarouselWrap from '@/components/CarouselWrap';
import { MainPageStyled } from './styled';
import React, { useEffect,useRef } from 'react';
import MainArtists from '@/components/MainArtists';
import CardWrap from '@/components/CardWrap';



const MainPage = () => {

    return (
        <MainPageStyled>
            <CarouselWrap  />
            <MainArtists />
            <CardWrap />
        </MainPageStyled>
    );
};

export default MainPage;
