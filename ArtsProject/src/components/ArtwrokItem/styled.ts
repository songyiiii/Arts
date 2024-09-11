import styled from 'styled-components';

export const ArtworkItemStyled = styled.div`
    padding: 10px;
    background-color: #f5f2f0;
    margin-bottom: 30px;
    .img {
        overflow: hidden;
        display: flex;
        justify-content: center;

        img {
            width: 100%;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;
        }
        img:hover {
            transform: scale(2);
        }
    }
    .text {
        p {
            line-height: 1.5;
            cursor: pointer;
        }
        p:nth-of-type(1) {
            font-weight: bold;
        }
        p:nth-of-type(2) {
            color: gray;
        }
        p:nth-of-type(3) {
            color: gray;
        }

    }
    .customLink {
        text-decoration: none; 
        color: inherit;
    }
`;
