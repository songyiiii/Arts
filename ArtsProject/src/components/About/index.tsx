import { AboutStyled } from './styled';
import arts from '../../assets/image/arts.jpg';
import Location from '../Location';
import Image from 'next/image';

const About = () => {
    console.log(arts, '이미지경로확인');
    return (
        <AboutStyled>
            <div className="AboutTop">
                <div className="imgBox">
                    <Image
                    className='img'
                        src={arts.src}
                        alt="회사이미지"
                        priority={true}
                        width={300} // 숫자 값으로 지정
                        height={600} // 숫자 값으로 지정
                        layout="responsive"
                    />
                    <h1>Arts</h1>
                    <h2>Where Art Meets Inspiration</h2>
                </div>
                <div className="aboutText">
                    <p>
                        예술이 사람들에게 깊은 영감과 감동을 선사하는 곳 국내외
                        다양한 작품들을 통해 예술의 경계를 넓히고,
                        창의적 사고와 상상력을 자극하는 전시를
                        제공합니다.예술을 통해 새로운 시각을 발견하고, 
                        삶에 대한 풍부한 경험을 쌓을 수 있도록 노력하겠습니다
                    </p>
                </div>
            </div>

            <Location />
        </AboutStyled>
    );
};
export default About;
