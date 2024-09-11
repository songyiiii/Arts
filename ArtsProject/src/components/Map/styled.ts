import styled from 'styled-components';

export const MapStyled = styled.div`
    width: 40%;
    height: 80%;
    border-radius: 15px;
    @media screen and (max-width: 480px) {
        width: 100%;
        margin-bottom: 10px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;
