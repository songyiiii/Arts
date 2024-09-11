import React, { useState } from 'react';
import { artists, datas } from '@/utill/datas';
import { ArtistsStyled } from './styled';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Artists = () => {
    //라우터설정
    const router = useRouter();
    const handleClick = (artistName: string) => {
        router.push(`/artist/${artistName}`);
    };

    //화면에 한번에 몇개의 컨텐츠를 보여줄건지 (24개설정)
    const [visibleCount, setVisibleCount] = useState(24); 


    //이름일치하는 예술가의 데이터를 찾아서 이미지 url반환
    const getArtistImage = (artistName:string) => {
        const artistData = datas.find(
            (data) => data.artist.name === artistName
        );
        return artistData ? artistData.src.src : null;
    };
    //알파벳순 정렬
    const sortedArtists = [...artists].sort((a, b) => {
        return a.name.localeCompare(b.name); 
    });
    // console.log(sortedArtists,'솔티드')
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };

    return (
        <>
            {' '}
            <ArtistsStyled>
                {sortedArtists.slice(0, visibleCount).map((x, i) => {
                    const hoverName = getArtistImage(x.name);
                    return (
                        <div
                            className="artist"
                            key={x.name}
                            onClick={() => handleClick(x.name)}
                        >
                            <p>{x.name}</p>
                            {hoverName && (
                                <Image
                                    src={hoverName}
                                    alt={x.name}
                                    width={400}
                                    height={400}
                                    className='img'
                                />
                            )}
                        </div>
                    );
                })}
            </ArtistsStyled>
            {visibleCount < sortedArtists.length && (
                <div className="loadMoreContainer" style={{display:'flex', justifyContent:'center', marginBottom:'100px'}}>
                    <button onClick={loadMore} className="loadMoreBtn" style={{border:0, padding:'10px 20px', backgroundColor:'black', color:'white', cursor:'pointer'}}>
                        더보기
                    </button>
                </div>
            )}
        </>
    );
};

export default Artists;
