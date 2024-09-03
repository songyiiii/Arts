import styled from 'styled-components';

export const HeaderStyled = styled.div`
    .nav {
        width: 100%;
        height: 60px; /* Header 높이 설정 */
        background-color: black;
        color: white;
        z-index: 10; /* 다른 요소들보다 위에 오도록 z-index 설정 */
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        .logo {
            width: 20%;
        }
        .menu {
            width: 80%;
            display: flex;
        }
        div {
            margin: 10px 40px;
            cursor: pointer;
        }
    }
`;
