import styled from 'styled-components';

interface HeaderProps {
    scroll: boolean;
    headerVisible: boolean;
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
        padding: 20px 30px;

        .logo {
            h1 {
                font-size: 2.2rem;
                color: ${({ scroll}) => 
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
        .mobileIcon {
            display: flex;
            cursor: pointer;
        }

        .menu {
            display: none;
        }
    }
`;
