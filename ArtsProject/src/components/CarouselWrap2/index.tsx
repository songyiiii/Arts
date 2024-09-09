import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { CarouselWrap2Styled } from './styled';
import { slide } from '../../utill/datas';

const CarouselWrap2 = () => {
    return (
        <CarouselWrap2Styled>
            <Swiper
                modules={[ Navigation, Autoplay]}
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation // 기본 내비게이션 버튼 활성화
                className="swiper"
                autoplay={{
                    delay: 4000, // 2초마다 슬라이드 넘기기
                    disableOnInteraction: false, // 사용자가 슬라이드를 터치하거나 클릭해도 자동 넘김 유지
                }}
            >
                {slide?.map((x, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <a href={x.link}>
                                <div className="mainSlide">
                                    <div className="textBox1"  >
                                        <h2>{x.name}</h2>
                                        <h2>{x.name}</h2>
                                        <h2>{x.name}</h2>
                                        <h2>{x.name}</h2>
                                    </div>
                                    <img src={x.img} alt={x.name}></img>
                                    <div className="textBox2" >
                                        <h2>{x.date}</h2>
                                        <h2>{x.location}</h2>
                                        <h2>{x.date}</h2>
                                        <h2>{x.location}</h2>
                                        <h2>{x.date}</h2>
                                        <h2>{x.location}</h2>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </CarouselWrap2Styled>
    );
};
export default CarouselWrap2;
