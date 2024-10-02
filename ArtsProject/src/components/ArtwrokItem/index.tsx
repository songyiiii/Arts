import { ArtworkItemStyled } from './styled';
import { useState } from 'react';
import Link from 'next/link';

interface ArtworkItemProps {
    id: number;
    title: string;
    artist: string;
    price: number;
    imgUrl: string;
}

const ArtworkItem = ({
    id,
    title,
    artist,
    price,
    imgUrl,
}: ArtworkItemProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
// console.log(position,'포지션')
    //마우스가 해당 div요소위에서 움직일때 발생하는 마우스 이동 이벤트 처리 함수
    //e-> 마우스 이벤트 객체 이벤트가 발생한 대상과 마우스의 좌표 등을 제공
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // getBoundingClientRect():dom요소의 크기와 화면에서의 위치를 반환하는 메서드 
        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPosition({ x, y });
        // console.log(left,'레프트')
    };

    return (
        <ArtworkItemStyled>
            <Link  href={`/artwork/${title}`} className="customLink">
                <div className="img" >
                    <img
                        onMouseMove={handleMouseMove}
                        style={{
                            transformOrigin: `${position.x}% ${position.y}%`,
                        }}
                        src={imgUrl} alt={title} />
                </div>
                <div className="text">
                    <p>{artist}</p>
                    <p>{title}</p>
                    <p>{price.toLocaleString()}</p>
                </div>
            </Link>
        </ArtworkItemStyled>
    );
};
export default ArtworkItem;
