import styled from 'styled-components';

interface HeaderProps {
    scroll: boolean;
    headerVisible: boolean;
    menuOpen: boolean;
}

export const HeaderStyled = styled.div<HeaderProps>`
    background-color: ${({ scroll }) =>
        scroll ? 'rgba(0, 0, 0)' : 'white'}; /* 스크롤 여부에 따른 배경색 */
    color: ${({ scroll }) =>
        scroll ? 'white' : 'black'}; /* 스크롤 여부에 따른 글자 색상 */
    transition: background-color 0.3s ease, color 0.3s ease, top 0.5s ease;
    position: fixed;
    top: ${({ headerVisible }) =>
        headerVisible ? '0' : '-100px'}; /* 스크롤에 따라 헤더가 위로 사라짐 */
    left: 0;
    z-index: 10000;
    width: 100%;

    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 30px;
        position: relative;

        .logo {
            h1 {
                font-size: 2.2rem;
                color: ${({ scroll }) =>
                    scroll ? 'white' : 'black'}; /* 로고 색상 변경 */
            }
        }

        .menu {
            div {
                font-size: 1.5rem;
                color: ${({ scroll }) =>
                    scroll ? 'white' : 'black'}; /* 메뉴 텍스트 색상 변경 */
            }
        }
    }

    @media screen and (min-width: 769px) {
        .nav {
            width: 100%;
            z-index: 10;

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
        .nav {
            padding: 5px 20px;
            .logo {
                h1 {
                    font-size: 1.9rem;
                }
            }
        }
        .mobileIcon {
            display: flex;
            cursor: pointer;
        }

        .menu {
            position: absolute;
            top: 46.5px;
            right: 0;
            right: ${({ menuOpen }) => (menuOpen ? '0' : '-100%')};
            height: 100vh !important;
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: right 0.3s ease;
            z-index: 10000000;
            background-color: black;
            color: white;
            div {
                font-size: 2rem;
                margin: 20px 0;
                color: white !important;
                cursor: pointer;
                position: relative;
                display: inline-block;
            }
            div::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0;
                height: 2px;
                background-color: white; /* 밑줄 색상 */
                transition: width 0.3s ease-out;
            }

            div:hover::after {
                width: 100%; /* hover 시 전체 width로 확장 */
            }
        }
    }
`;
