import styled from "styled-components";

export const CardListStyled = styled.div`
.sliderContainer {
    width: 50%;
    overflow: hidden;
    position: relative;
}

.slider {
    display: flex;
    transition: transform 1s ease; /* 부드러운 전환 */
    will-change: transform; /* 퍼포먼스 향상을 위한 설정 */
}

.hovered {
    transform: translateX(-300%); /* hover 시 나머지 슬라이드만 이동 */
}

.slide {
    width: 100%; /* 슬라이드가 화면을 채우도록 설정 */
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: transform 1s ease; /* 슬라이드 이동 애니메이션 */
}

.image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.fixed {
    /* 첫 번째 슬라이드를 고정 */
    position: absolute; /* 절대 위치 */
    left: 0; /* 왼쪽에 고정 */
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 0; /* 나머지 슬라이드들보다 위에 보이도록 설정 */
}

.text {
    font-size: 24px;
    color: white;
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 각 슬라이드의 전환 지연 설정 */
.slide:nth-child(1) {
    transition-delay: 0.1s;
}
.slide:nth-child(2) {
    transition-delay: 0.2s;
}
.slide:nth-child(3) {
    transition-delay: 0.3s;
}
.slide:nth-child(4) {
    transition-delay: 0.4s;
}
.slide:nth-child(5) {
    transition-delay: 0.5s;
}

`