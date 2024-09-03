import styled from 'styled-components';

export const MainAristNameStyled = styled.div`
    width: 50%;
    height: 100%;
    padding: 5px;
    animation: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-right: 2px solid white;
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
`;
