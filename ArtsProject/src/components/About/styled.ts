import styled from 'styled-components';

export const AboutStyled = styled.div`
    padding: 90px 30px 200px 30px;
    background: linear-gradient(135deg, #ffffff 0%, #eeeeee 100%);
    .AboutTop {
        padding-top: 50px;
        margin-bottom: 100px;
        align-items: center;
        animation: fadeInUp 1.2s ease-out;
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .imgBox {
            width: 100%;
            display: flex;
            justify-content: end;
            position: relative;
            .img {
                border-radius: 30px 0 0 0;
                width: 80% !important;
            }
            h1,
            h2 {
                position: absolute;
                font-size: 5rem;
                color: white;
                background: linear-gradient(to right, black, white);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent; 
            }
            h1 {
                width: 100%;
                top: 60%;
                left: 0%;
                transform: translate(-50%-50%);
            }
            h2 {
                width: 100%;
                top: 80%;
                left: 0%;
                /* transform: translate(-50%,-30%); */
            }
        }
        .aboutText {
            margin-top: 50px;
            p {
                line-height: 1.6;
                font-size: 1.1rem;
            }
        }
    }
`;
