import React, { useState } from 'react';
import { artists, datas } from '@/utill/datas';
import { ArtistsStyled } from './styled';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Artists = () => {
    const router = useRouter();
    const handleClick = (artistName: string) => {
        // 아티스트 이름을 클릭했을 때 이동할 페이지 설정
        router.push(`/artist/${artistName}`);
    };

    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const NameHover = (index: number) => {
        setHoverIndex(index); // hover 중인 아티스트 인덱스를 설정
    };

    const getArtistImage = (index: number) => {
        const artistData = datas.find(
            (data) => data.artist.name === artists[index].name
        );
        return artistData ? artistData.src.src : null;
    };

    const sortedArtists = [...artists].sort((a, b) => {
        return a.name.localeCompare(b.name); // 알파벳 오름차순 정렬
    });

    return (
        <ArtistsStyled>
            {sortedArtists.map((x, i) => {
                const hoverName = getArtistImage(i);
                return (
                    <div
                        className="artist"
                        key={x.name}
                        onMouseEnter={() => NameHover(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => handleClick(x.name)}
                    >
                        <p>{x.name}</p>
                        {hoverName && <Image src={hoverName} alt={x.name} width={400} height={400}/>}
                    </div>
                );
            })}
        </ArtistsStyled>
    );
};

export default Artists;
