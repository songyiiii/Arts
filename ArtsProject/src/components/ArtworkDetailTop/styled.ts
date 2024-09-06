import styled from 'styled-components';

export const ArtworkDetailTopStyled = styled.div`
    width: 95%;
    margin: 30px auto;
    
    .buyBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .textBox {
            p {
                font-size: 1rem;
                color: gray;
                margin-bottom: 5px;
            }
            p:first-child {
                color: black;
                font-weight: bold;
                font-size: 2rem;
                margin-bottom: 0;
            }
            p:nth-of-type(2) {
                color: black;
                font-weight: bold;
                font-size: 1.8rem;
                margin-bottom: 10px;
            }
            p:last-child {
                color: black;
                font-size: 1.3rem;
            }
        }
        .btnBox {
            button {
                padding: 10px 40px;
                background-color: black;
                color: white;
                border-radius: 15px;
                border: 0;
                margin-right: 10px;
                cursor: pointer;
            }
            button:hover {
                background-color: gray;
                transition: 0.5s;
            }
        }
    }

    @media screen and (max-width: 768px) {
        display: block;
        .imgBox {
            width: 100%;
            background-color: aliceblue;
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            img {
                width: 150%;
            }
            img:hover {
                cursor: zoom-in;
            }
        }
        .textBox {
            width: 100%;
        }
        .btnBox {
            display: flex;
        }
    }
    @media screen and (min-width: 769px) {
        display: flex;
        .imgBox {
            width: 60%;
            img {
                width: 100%;
            }
            img:hover {
                cursor: zoom-in;
            }
        }
        .buyBox {
            width: 40%;
        }
    }
`;
