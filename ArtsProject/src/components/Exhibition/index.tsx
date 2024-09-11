import { datas, exhibition } from '@/utill/datas';
import { ExhibitionStyled } from './styled';
import { useState } from 'react';
import CircleCard from '../CircleCard';
import CardList from '../CardList';

interface ArtistData {
    artist: {
        name: string;
        gallery?: {
            name: string;
        };
    };
    src: {
        src: string;
    };
    title: string;
}
const Exhibition = () => {
    const exhibitionArtist = exhibition.map((data) => data.name.name);
    // console.log(exhibitionArtist,'전시작가')
    const uniqueArtists = exhibitionArtist.map((artistName) =>
        datas.find((data) => data.artist.name === artistName)
    );
    console.log(uniqueArtists,'유니크')
    // 기본으로 첫 번째 아티스트의 데이터를 상태로 설정
    const [currentArtist, setCurrentArtist] = useState<ArtistData | null>(
        uniqueArtists[0] || null
    );

    // hover 이벤트 발생 시 상태 업데이트
    const handleHover = (artistData: ArtistData) => {
        setCurrentArtist(artistData);
    };
    return (
        <>
         {currentArtist && (
                <ExhibitionStyled>
                    <h1>EXHIBITION</h1>
                    <div className="bgBox">
                        {/* <p>{currentArtist.title}</p>
                        <p>{currentArtist.artist.gallery?.name }</p> */}
                    </div>
                    <CardList
                        key={currentArtist.title}
                        imageSrc={currentArtist.src.src}
                        galleryName={
                            currentArtist.artist.gallery?.name || 'N/A'
                        }
                        exhibitionName={currentArtist.title}
                    />
                </ExhibitionStyled>
            )}

            {/* CircleCard에서 hover된 아티스트 데이터를 CardList로 전달 */}
            <CircleCard onHover={handleHover} />
        </>
           
    );
};
export default Exhibition;
