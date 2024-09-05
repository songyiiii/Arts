
import { MainPageStyled } from './styled';
import React, { useEffect,useRef } from 'react';
import MainArtists from '@/components/MainArtists';
import CarouselWrap from '@/components/CarouselWrap';
import { CardList } from '@/components/CardList';






const MainPage = () => {

    return (
        <MainPageStyled>
            <CarouselWrap  />
            <MainArtists />
            <CardList />
        </MainPageStyled>
    );
};

export default MainPage;
