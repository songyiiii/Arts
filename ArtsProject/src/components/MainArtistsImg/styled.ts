import styled from 'styled-components';

export const MainAristImgStyled = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        cursor: pointer;
        opacity: 0; /* 기본 상태에서 이미지를 숨김 */
        transition: opacity 0.5s ease-in-out; /* 부드러운 전환 효과 */
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 70vh;
        img {
            width: 100%;
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 100%;
        height: 60vh;
        img {
            width: 100%;
        }
    }
`;
