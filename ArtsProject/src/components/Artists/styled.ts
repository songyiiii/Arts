import styled from 'styled-components';

export const ArtistsStyled = styled.div`
    padding: 90px 30px 200px 30px;
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
        position: relative; /* 각 artist에 대해 relative 설정 */
        color: white; /* 텍스트는 항상 보이도록 유지 */
        text-align: center;
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

    .artist img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; /* 이미지 크기 맞춤 */
        opacity: 0; /* 기본 상태에서 이미지를 숨김 */
        transition: opacity 0.3s ease-in-out; /* 부드러운 전환 효과 */
    }
    .artist:hover {
        background-color: white;
        transition: 0.2s;
    }
    .artist:hover img {
        opacity: 1; /* hover 시 이미지가 서서히 나타남 */
    }
    .artist:hover p {
        display: none;
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
