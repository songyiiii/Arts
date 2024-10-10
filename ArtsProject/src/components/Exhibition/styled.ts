import styled from 'styled-components';

export const ExhibitionStyled = styled.div`
    overflow: hidden;
    text-align: center;
    position: relative;
    width: 100vw;
    h1 {
        background: linear-gradient(
            to bottom,
            white,
            gray
        ); /* 위에서 아래로 그라데이션 */
        -webkit-background-clip: text;
        color: transparent; /* 텍스트 자체를 투명하게 만들고, 배경 그라데이션이 보이도록 함 */
        background-clip: text;
    }
    .bgBox {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 40%;
        left: 50%;
        width: 100%;
        height: 80%;
        transform: translate(-50%, -40%);
        background-color: white;
        z-index: -10;
        color: black;
    }
    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        h1 {
            font-size: 4rem;
        }
    }
`;
