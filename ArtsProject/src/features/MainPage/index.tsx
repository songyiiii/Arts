
import { MainPageStyled } from './styled';
import React, { useEffect,useRef } from 'react';
import MainArtists from '@/components/MainArtists';
import CarouselWrap2 from '@/components/CarouselWrap2';
import { Cards } from '@/components/Cards';


const MainPage = () => {

    return (
        <MainPageStyled>
            <CarouselWrap2 />
            {/* <CarouselWrap  /> */}
            <MainArtists />
            <Cards />
        </MainPageStyled>
    );
};

export default MainPage;
