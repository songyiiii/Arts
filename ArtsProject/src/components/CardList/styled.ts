import styled from 'styled-components';

export const CardListStyled = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;
    z-index: 10;
    .slider {
        display: flex;
        transition: transform 1s ease; /* 부드러운 전환 */
        will-change: transform; /* 퍼포먼스 향상을 위한 설정 */
    }

    .hovered {
        transform: translateX(-300%); /* hover 시 나머지 슬라이드만 이동 */
    }

    .slide {
        width: 100%; /* 슬라이드가 화면을 채우도록 설정 */
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: transform 1s ease; /* 슬라이드 이동 애니메이션 */
        cursor: pointer;
    }

    .image {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .fixed {
        /* 첫 번째 슬라이드를 고정 */
        position: absolute; /* 절대 위치 */
        left: 0; /* 왼쪽에 고정 */
        top: 0;
        bottom: 0;
        width: 100%;
        z-index: 0; /* 나머지 슬라이드들보다 위에 보이도록 설정 */
    }

    .text {
        color: white;
        text-align: center;
        padding: 20px;
        /* background-color: rgba(0, 0, 0, 0.6); */
        width: 50%;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .text p {
        width: 100%;
        line-height: 1.5;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3),
            /* 약한 그림자 */ 2px 2px 5px rgba(0, 0, 0, 0.2),
            /* 약간 더 깊은 그림자 */ -1px -1px 2px rgba(255, 255, 255, 0.1);
    }
    .text p:nth-child(1) {
        font-size: 1.3rem;
    }
    .text p:nth-child(2) {
        font-size: 1.1rem;
    }
    /* 각 슬라이드의 전환 지연 설정 */
    .slide:nth-child(1) {
        transition-delay: 0.1s;
    }
    .slide:nth-child(2) {
        transition-delay: 0.2s;
    }
    .slide:nth-child(3) {
        transition-delay: 0.3s;
    }
    .slide:nth-child(4) {
        transition-delay: 0.4s;
    }
    .slide:nth-child(5) {
        transition-delay: 0.5s;
    }
`;
