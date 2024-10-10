import styled from 'styled-components';

export const MainPageStyled = styled.div`
    background-color: black;
    overflow: hidden;
    padding: 0 30px;
    .carousel-section {
        opacity: 1;
        transform: none;
        transition: none; /* 첫 번째 섹션에는 애니메이션을 제거 */
        overflow: hidden;
    }
    .section {
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        color: white;
        text-align: center;
        transition: transform 1s ease-out;
        transform: translateY(30vh); 
        opacity: 0; 
        overflow: hidden;
    }
    .show {
        transform: translateY(0); 
        opacity: 1; 
        overflow: hidden;
    }

    .cards {
        background-color: black;
        display: block;
        margin-bottom: 100px;
    }
    @media screen and (max-width: 480px) {
        transform: translateY(10vh); 

    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        transform: translateY(20vh); 
    }
`;
