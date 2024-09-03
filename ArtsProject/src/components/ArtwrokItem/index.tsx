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
    // console.log(id,title,artist,price,imgUrl,'아트워크확인')
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // getBoundingClientRect():dom요소의 위치와 크기를 가져옴
        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();
        // console.log(e, 'e확인!!');
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPosition({ x, y });
    };

    return (
        <ArtworkItemStyled>
            <Link  href={`/artwork/${title}`}>
                <div className="img">
                    <img
                        onMouseMove={handleMouseMove}
                        style={{
                            transformOrigin: `${position.x}% ${position.y}%`,
                        }}
                        src={imgUrl}
                    ></img>
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
