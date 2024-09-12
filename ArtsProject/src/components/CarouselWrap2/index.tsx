import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { CarouselWrap2Styled } from './styled';
import { slide } from '../../utill/datas';

const CarouselWrap2 = () => {
    return (
        <CarouselWrap2Styled>
            <Swiper
                modules={[ Navigation, Autoplay]}
                navigation 
                className="swiper"
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
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
                                        <h2>{x.name}</h2>
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
