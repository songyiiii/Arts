import styled from 'styled-components';
export const CircleCardListStyled = styled.div`
width: 100vw;
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .list {
        position: relative;
        animation: slideIn 1s ease-out;
        .listImg {
            border: 5px solid #000;
            width: 100%;
            img {
                width: 100%;
                cursor: pointer;
            }
            img:hover {
                opacity: 0.5;
                transition: 0.5s;
            }
        }
    }
    @media screen and (max-width: 480px) {
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
    }
`;
