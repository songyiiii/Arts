import styled from 'styled-components';

export const CardListStyled = styled.div`
    margin: auto;
    color: white;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    width: 50%;
    overflow: hidden;
    .slider {
        width: 100%;
        display: flex;
        transition: transform 1.5s ease; 
        will-change: transform;
    }
    .hovered {
        transform: translateX(-700%); 
    }
    .slide {
        width: 100%;
        height: 250px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: transform 1.5s ease;
        cursor: pointer;
    }

    .image {
        height: 300px;
        object-fit: cover;
    }
    .fixed {
        position: absolute; 
        left: 50%; 
        top: 50%;
        transform: translate(-50%, -50%);
        height: 300px;
        z-index: 0; 
    }
    .text {
        color: white;
        text-align: center;
        padding: 20px;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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