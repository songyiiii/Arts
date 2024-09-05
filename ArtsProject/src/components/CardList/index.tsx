import React, { useState } from 'react';
import styles from './CardList.module.css';
import img1 from '../../assets/image/category2.png';

export const CardList: React.FC = () => {
    const images = [img1, img1, img1, img1, img1, img1, img1];

    const [hover, setHover] = useState(false); // hover 상태 관리

    return (
        <div className={styles.sliderContainer}
            onMouseEnter={() => setHover(true)}  // hover 시 슬라이딩 시작
            onMouseLeave={() => setHover(false)} // hover 해제 시 원래 상태로 복귀
        >
            {/* 첫 번째 슬라이드는 별도로 고정 */}
            <div className={styles.fixed}>
                <img src={img1.src} alt="Fixed Slide" className={styles.image} />
            </div>

            {/* 나머지 슬라이드들은 슬라이드 안에 포함 */}
            <div className={`${styles.slider} ${hover ? styles.hovered : ''}`}>
                {images.slice(1).map((src, index) => (
                    <div className={styles.slide} key={index + 1}>
                        <img src={src.src} alt={`Slide ${index + 2}`} className={styles.image} />
                    </div>
                ))}
                {/* 마지막 빈 슬라이드에 텍스트 넣기 */}
                <div className={styles.slide}>
                    <div className={styles.text}>
                        This is a description about the images.
                    </div>
                </div>
            </div>
        </div>
    );
};
