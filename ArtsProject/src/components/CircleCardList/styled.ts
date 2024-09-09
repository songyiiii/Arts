import styled from 'styled-components';
export const CircleCardListStyled = styled.div`
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
            border: 5px solid #000; /* 테두리 */
            width: 100%;
            /* background-color: green; */
            img {
                width: 100%;
            }
        }
    }
`;
