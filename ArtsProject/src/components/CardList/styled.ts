import styled from 'styled-components';

export const CardListStyled = styled.div`
    margin: auto;
    color: white;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    width: 30%;
    overflow: hidden;
    &:hover .slider{
        transform: translateX(-900%);
    }
    .slider {
        width: 100%;
        display: flex;
        transition: transform 1.1s ease;
        .slide {
            width: 100%;
            height: 250px;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            cursor: pointer;
            img {
                transition: transform 1.5s ease;
            }
        }

    }
    .fixed {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 300px;
        z-index: 0;
    }
    .image {
        height: 300px;
        object-fit: cover;
    }
    .text {
        color: white;
        text-align: center;
        padding: 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        p {
            
            font-size: 1.8rem;
            width: 100%;
            line-height: 1.5;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3),
                /* 약한 그림자 */ 2px 2px 5px rgba(0, 0, 0, 0.2),
                /* 약간 더 깊은 그림자 */ -1px -1px 2px rgba(255, 255, 255, 0.1);
            &:nth-of-type(2) {
                background-color: gray;
            }
        }
    }
`;
