import styled from 'styled-components';

export const MainAristNameStyled = styled.div`
    width: 50%;
    animation: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
    }
    p {
        margin-right: 30px;
        margin-bottom: 15px;
        font-weight: bold;
        font-size: 1.3rem;
        transition: opacity 0.5s ease;
        cursor: pointer;
        background-color: inherit;
        z-index: 100;
    }
    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    p.blink {
        animation: blink 1s linear 5s;
    }
    p:hover {
        color: gray;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 50%;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`;
