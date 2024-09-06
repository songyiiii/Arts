import styled from 'styled-components';

interface MainArtistsStyledProps {
    scrollY: number; //h1스크롤
}

export const MainArtistsStyled = styled.div<MainArtistsStyledProps>`
    margin-bottom: 100px;
    .flexBox {
        height: 100%;
        display: flex;
        background-color: black;
    }
    height: 600px;
    width: 100%;
    margin-top: 100px;
    color: white;
    position: relative;
    h1 {
        position: absolute;
        transform: translate(-20%, -50%)
            ${(props) => `scale(${1 + props.scrollY / 1000})`};
        top: 50%;
        left: 20%;
        font-size: 8rem;
        transition: top 0.5s ease, left 0.5s ease;
        background-color: inherit;
        color: rgba(255, 255, 255, 0.2);
        /* text-shadow: -1px 0px white, 0px 1px white, 1px 0px white,
            0px -1px white; */
        opacity: 0.6;
    }
`;
