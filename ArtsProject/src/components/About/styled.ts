import styled from 'styled-components';

export const AboutStyled = styled.div`
    padding: 90px 30px 200px 30px;
    .AboutTop {
        padding-top: 50px;
        margin-bottom: 100px;
        display: flex;
        align-items: center;
        .aboutText {
            width: 60%;
            h1 {
                font-size: 3rem;
            }
            h2 {
                margin: 10px 0;
            }
            p {
                line-height: 1.5;
                padding-right: 50px;
            }
        }
        .img {
            width: 40%;
            img {
                width: 100%;
            }
        }
    }
`;
