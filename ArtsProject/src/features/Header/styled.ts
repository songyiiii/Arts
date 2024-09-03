import styled from 'styled-components';

export const HeaderStyled = styled.div`
    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:20px 20px;
        .logo {
            h1 {
                font-size: 2.2rem;
            }
        }
        .menu {
            div {
                font-size: 1.5rem;
            }
        }
    }
    @media screen and (min-width: 769px) {
        .nav {
            width: 100%;
            z-index: 10; /* 다른 요소들보다 위에 오도록 z-index 설정 */
            .logo {
                width: 20%;
            }
            .menu {
                width: 80%;
                display: flex;
            }
            div {
                margin: 0px 40px;
                cursor: pointer;
            }
            .mobileIcon {
                display: none;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .mobileIcon {
            display: flex;
            cursor: pointer;
        }
        .menu {
            display: none ;
        }
    }
`;
