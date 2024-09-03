import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CarouselStyledProps {
    id: number;
}

export const CarouselStyled = styled(motion.div)<CarouselStyledProps>`
    width: 100%;
    max-width: 600px;
    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;
