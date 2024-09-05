import styled from 'styled-components';

export const CarouselWrap2Styled = styled.div`
    padding-top: 50px;
    padding-bottom: 100px;
    .swiper {
        width: 100%;
        height: 80vh;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
    }

    .swiper-slide {
        .mainSlide {
            /* display: block; */
            width: 50%;
            height: 50%;
            transition: all 1s ease;
            background-color: white;
            position: relative;
            overflow: hidden;
            opacity: 0;
            .title {
                /* width: 100%; */
                font-size: 2.2rem;
                transition: all 30s ease;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .title.hovered {
                left: 0;
                top: 50%;
                transform: translate(0,-50%) rotate(90deg);
            }
            .info {
                position: absolute;
                bottom: 5%;
                display: flex;
                opacity: 0;
                transition: all 1.5s ease;
                white-space: nowrap;
                animation: slideLeft 20s linear infinite;
                li {
                    list-style: none;
                    background-color: black;
                    color: white;
                    width: 150px;
                    border-radius: 15px;
                    margin: 10px 20px;
                    cursor: pointer;
                    padding: 10px;
                }
            }
        }
    }

    .swiper-slide-active {
        .mainSlide {
            width: 100%;
            height: 100%;
            opacity: 1;
            .title {
                font-size: 1.6rem;
                transition: all 1.5s ease;
            }
            .info {
                opacity: 1;
            }
        }
    }
    @keyframes slideLeft {
        0% {
            transform: translateX(100%); /* 오른쪽에서 시작 */
        }
        100% {
            transform: translateX(-100%); /* 왼쪽으로 끝까지 이동 */
        }
    }
`;
