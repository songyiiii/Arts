import styled from 'styled-components';
export const LocationStyled = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f7f7f7;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: start;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;
