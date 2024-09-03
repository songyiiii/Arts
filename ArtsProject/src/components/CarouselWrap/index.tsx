
import Carousel from '../Carousel';
import { CarouselWrapStyled } from './styled';
import { MainSlide} from '../../utill/datas'
import { motion, useAnimation } from 'framer-motion';
import { ScrollContainer, ScrollPage, Animator, batch, MoveIn, MoveOut, Sticky, Fade } from "react-scroll-motion";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// interface CarouselWrapProps {
//     sectionsRef: React.RefObject<HTMLDivElement[]>;
// }
// gsap.registerPlugin(ScrollTrigger);

const CarouselWrap = () => {
    

    return (
        <CarouselWrapStyled>
            { MainSlide.map((x, i) => (
                <Carousel data={x} key={i} />
            ))}
        </CarouselWrapStyled>
    );
};

export default CarouselWrap;
