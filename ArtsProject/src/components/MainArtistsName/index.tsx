import React from 'react';
import { MainAristNameStyled } from './styled';
import { useRouter } from 'next/router';

interface Artist {
    name: string;
}

interface AnimationTimings {
    delay: string;
}

interface MainArtistsNameProps {
    artists: Artist[];
    visible: Record<number, boolean>;
    animationTimings: Record<number, AnimationTimings>;
    onHover: (artistName: string) => void;
}

const MainArtistsName = React.forwardRef<HTMLDivElement, MainArtistsNameProps>(
    ({ artists, visible, animationTimings, onHover }, ref) => {
        const router = useRouter();

        const handleClick = (artistName: string) => {
            router.push(`/artist/${artistName}`);
        };

        return (
            <MainAristNameStyled ref={ref}>
                {artists.map((artist, index) => {
                    const isBlinking = visible[index];
                    const timing = animationTimings[index] || {  delay: '0s' };
                    const { delay } = timing;
                    return (
                        <p
                            key={index}
                            data-index={index}
                            className={isBlinking ? 'blink' : ''}
                            onMouseEnter={() => onHover(artist.name)}
                            onClick={() => handleClick(artist.name)}
                            style={{
                                animationDelay: delay,
                            }}
                        >
                            {artist.name}
                        </p>
                    );
                })}
            </MainAristNameStyled>
        );
    }
);

export default MainArtistsName;
