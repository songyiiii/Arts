
import { MainPageStyled } from './styled';
import React, { useEffect,useRef } from 'react';
import MainArtists from '@/components/MainArtists';
import { CardList } from '@/components/CardList';
import CarouselWrap2 from '@/components/CarouselWrap2';


const MainPage = () => {

    return (
        <MainPageStyled>
            <CarouselWrap2 />
            {/* <CarouselWrap  /> */}
            <MainArtists />
            <CardList />
        </MainPageStyled>
    );
};

export default MainPage;
