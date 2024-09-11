import styled from 'styled-components';

export const ArtistsStyled = styled.div`
    padding: 90px 30px 50px 30px;
    color: white;
    display: grid;
    grid-gap: 0;
    position: relative;
    justify-items: center;
    .artist {
        background-color: black;
        border: 1px solid white;
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        color: white;
        text-align: center;
        overflow: hidden;
        p {
            font-size: 1.5rem;
            z-index: 10;
            font-weight: bold;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7),
                /* 첫 번째 그림자 */ -1px -1px 2px rgba(0, 0, 0, 0.5),
                /* 반대 방향으로 두 번째 그림자 */ 2px 2px 3px
                    rgba(255, 255, 255, 0.4); /* 약간 밝은 그림자 */
        }
    }
    .artist {
        .img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
        &:hover {
            background-color: white;
            transition: 0.3s;
            .img {
                opacity: 1;
            }
            .p {
                display: none;
            }
        }
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (min-width: 1025px) {
        grid-template-columns: repeat(6, 1fr);
    }
`;
