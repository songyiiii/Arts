import React from 'react';
import { MainAristNameStyled } from './styled';
import { useRouter } from 'next/router';

interface Artist {
    name: string;
    // 다른 속성이 있다면 여기에 추가
}

interface MainArtistsNameProps {
    artists: Artist[];
    visible: Record<number, boolean>;
    onHover: (artistName: string) => void;
    nameAnimation: () => string;
}

const MainArtistsName = React.forwardRef<HTMLDivElement, MainArtistsNameProps>(
    ({ artists, visible, onHover, nameAnimation }, ref) => {
        const router = useRouter();
        const handleClick = (artistName: string) => {
            // 아티스트 이름을 클릭했을 때 이동할 페이지 설정
            router.push(`/artist/${artistName}`);
        };
    return (
        <MainAristNameStyled ref={ref}>
            {artists.map((x, i) => {
                const isBlinking = visible[i];
                // console.log(isBlinking,'블링크확ㄱ인')
                const animationTiming = nameAnimation(); 
                return (
                    <p
                        key={i}
                        data-index={i}
                        className={isBlinking ? 'blink' : ''}
                        onMouseEnter={() => onHover(x.name)}
                        onClick={() => handleClick(x.name)}
                        style={{
                            animationDuration: animationTiming.split(' ')[0],
                            animationDelay: animationTiming.split(' ')[1],
                        }}
                    >
                        {x.name}
                    </p>
                );
            })}
        </MainAristNameStyled>
    );
});

export default MainArtistsName;
