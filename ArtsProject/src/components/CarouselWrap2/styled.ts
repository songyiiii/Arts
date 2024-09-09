import styled from 'styled-components';

export const CarouselWrap2Styled = styled.div`
    overflow: hidden;
    margin-bottom: 50px;
    margin-top: 62px;
    .swiper {
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background-color: black;
        transition: all 0.5s ease;
        cursor: pointer;
        .mainSlide {
            width: 100%;
            height: 90%;
            position: relative;
            color: white;
            text-align: left;
            img {
                width: 50%;
                height: 35%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: all 2s ease;
            }
            .textBox1,
            .textBox2 {
                font-size: 1.7rem;
                color: white;
                position: absolute;
                left: 0;
                z-index: 10000;
                opacity: 0;
                background-color: black;
                width: 100%;
                animation: scroll-text 30s linear infinite;
                white-space: nowrap;
            }
            .textBox1 {
                top: 0;
            }

            .textBox2 {
                bottom: 0;
            }
            .textBox1 h2,
            .textBox2 h2 {
                margin-right: 20px;
                -webkit-text-stroke: 1px white;
                color: black;
            }
        }
    }
    @keyframes scroll-text {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
    .swiper-slide-active {
        .mainSlide {
            img {
                width: 100%;
                height: 85%;
            }
            .textBox1,
            .textBox2 {
                opacity: 1;
                display: flex;
            }
        }
    }
    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        width: 50px;
        height: 50px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;
