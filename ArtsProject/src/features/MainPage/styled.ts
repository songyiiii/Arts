import styled from 'styled-components';

export const MainPageStyled = styled.div`
  background-color: black;
  padding: 0 30px;
  .carousel-section {
    opacity: 1;
    transform: none;
    transition: none; /* 첫 번째 섹션에는 애니메이션을 제거 */
    overflow: hidden;
  }
  .section {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: white;
    text-align: center;
    transition: transform 1s ease-out;
    transform: translateY(30vh);
    opacity: 0;
    overflow: hidden;
  }
  .show {
    transform: translateY(0);
    opacity: 1;
    overflow: hidden;
  }

  .cards {
    background-color: black;
    display: block;
    margin-bottom: 100px;
  }
`;
