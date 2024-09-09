import styled from 'styled-components';
interface CircleCardListProps {
    title: string;
}
export const CircleCardListStyled = styled.div<CircleCardListProps>`
    .list {
        .listImg {
            position: relative;
            border: 5px solid #000; /* 테두리 */
            width: 100%;
            img {
                width: 100%;
            }
            &::after {
                /* content: "${(props) => props.title}"; */

                position: absolute;
                bottom: -30px; /* 테두리 바깥으로 위치 */
                left: 50%;
                transform: translateX(-50%);
                font-size: 1.2rem;
                color: white;
                background-color: transparent;
                z-index: 100;
                white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 설정 */
            }
        }
    }
`;
