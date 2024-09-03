import styled from 'styled-components';

export const ArtistsStyled = styled.div`
    .flexBox {
        height: 100%;
        display: flex;
        background-color: black;
    }
    height: 600px;
    width: 100%;
    margin-top: 100px;
    color: white;
    border: 2px solid white;
    position: relative;
    h1 {
        position: absolute;
        top: -20%; 
        left: 0;
        font-size: 8rem;
        transition: top 0.5s ease, left 0.5s ease; 
        background-color: inherit;
        color: black;
        text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;
        opacity: 0.5;
    }
`;
