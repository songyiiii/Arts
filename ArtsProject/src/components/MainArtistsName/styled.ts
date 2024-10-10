import styled from 'styled-components';

export const MainAristNameStyled = styled.div`
    width: 50%;
    animation: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
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
        animation: blink 5s linear;
    }
    p:hover {
        color: gray;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 30%;
        overflow: scroll;
        p {
            font-size: 0.9rem;
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 100%;
        height:40vh;
        overflow: scroll;
        p{
            font-size: 1rem;
        }
    }
`;
