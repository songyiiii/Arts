import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import styles from './Carousel.module.css';
import { MainSlide } from '@/utill/datas';

const CarouselWrap = () => {
    console.log(MainSlide, '메인슬라이드확인 ');
    return (
        <div className="section">
            <Swiper
                effect={'coverflow'}
                modules={[EffectCoverflow, Mousewheel]} // 모듈 추가
                direction="horizontal"
                loop={true} // 슬라이드 루프
                slidesPerView={2} // 슬라이드가 자동 크기 맞춤
                centeredSlides={true} // 중앙 슬라이드 설정
                spaceBetween={30} // 슬라이드 간 간격
                mousewheel={true} // 마우스 휠로 슬라이드 전환
                coverflowEffect={{
                    rotate: 0, // 회전 각도
                    stretch: 0, // 슬라이드 간의 거리
                    depth: 300, // 깊이감 조정 (중앙 슬라이드와의 거리)
                    modifier: 1, // 효과 강도
                    scale: 0.8, // 중앙 슬라이드보다 양쪽 슬라이드를 작게 만듦
                    slideShadows: false, // 그림자 제거
                }}
                className={styles.swiper}
            >
                {MainSlide.map((slide) => (
                    <SwiperSlide key={slide.id} className={styles.swiperSlide}>
                        <div className={styles.content}>
                            <img src={slide.src.src}></img>
                            <h1>{slide.name}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselWrap;
