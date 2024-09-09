import styled from 'styled-components';
export const LocationStyled = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f7f7f7;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .LocationStyled:hover {
        transform: scale(1.02);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
    }
    .locationWrap {
        padding: 60px 30px;
        text-align: center;
    }

`;
