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
            border: 5px solid #000; 
            width: 100%;
            img {
                width: 100%;
                /* border-radius: 50%; */
                cursor: pointer;
            }
        }
    }
`;
