import styled from 'styled-components';

interface MainArtistsStyledProps {
    scrollY: number; //h1스크롤
}

export const MainArtistsStyled = styled.div<MainArtistsStyledProps>`
    .flexBox {
        display: flex;
        background-color: black;
        align-items: center;
    }
    width: 100%;
    height: 100vh;
    color: white;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    z-index: -10;
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
        opacity: 0.9;
    }
    @media screen and (max-width: 480px) {
        .flexBox {
            display: block;
        }
        h1 {
            transform: translate(-50%, -50%)
                ${(props) => `scale(${1 + props.scrollY / 1000})`};
            top: 50%;
            left: 50%;
            font-size:7rem;
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        .flexBox {
            display: block;
        }
        h1 {
            transform: translate(-50%, -50%)
                ${(props) => `scale(${1 + props.scrollY / 1000})`};
            top: 50%;
            left: 50%;
            font-size: 5rem;
        }
    }
`;
