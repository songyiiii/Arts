import styled from "styled-components";

export const CardsStyled = styled.div`
overflow: hidden;
text-align: center;
position: relative;
h1 {
    color: white;
    font-size: 5rem;
    z-index: 1000;
}
.bgBox {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 80%;
    transform: translate(-50%,-50%);
    background-color: darkred;
    z-index: -10;
}
`
