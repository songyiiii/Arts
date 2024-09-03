import styled from "styled-components";

export const ArtworkListStyled = styled.div`
display: grid;
justify-content: space-around;
flex-wrap: wrap;
padding-top: 50px;
gap: 20px; 
text-align: center;
width: 95%;
margin: auto;

@media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
}
@media screen and (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
}
@media screen and (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
}

`