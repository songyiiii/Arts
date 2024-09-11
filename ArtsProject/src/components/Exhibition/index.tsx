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
    console.log(exhibitionArtist, 'ddd');
    const uniqueArtists = exhibitionArtist.map((artistName) =>
        datas.find((data) => data.artist.name === artistName)
    );
    console.log(uniqueArtists, '유니크');
    // 기본으로 첫 번째 아티스트의 데이터를 상태로 설정
    const [currentArtist, setCurrentArtist] = useState<ArtistData | null>(
        uniqueArtists[0] || null
    );
    const getExhibitionTitle = (artistName: string) => {
        const exhibitionData = exhibition.find(
            (data) => data.name.name === artistName
        );
        return exhibitionData ? exhibitionData.title : 'Unknown Exhibition'; // 전시 제목이 없다면 기본값 'Unknown Exhibition'
    };
    console.log(currentArtist, '커런ㅌ');
    // hover 이벤트 발생 시 상태 업데이트
    const handleHover = (artistData: ArtistData) => {
        setCurrentArtist(artistData);
    };
    return (
        <>
            {currentArtist && (
                <ExhibitionStyled>
                    <h1>EXHIBITION</h1>
                    <div className="bgBox"></div>
                    <CardList
                        key={currentArtist.title}
                        imageSrc={currentArtist.src.src}
                        galleryName={
                            currentArtist.artist.gallery?.name || 'N/A'
                        }
                        exhibitionName={getExhibitionTitle(
                            currentArtist.artist.name
                        )} // 전시 제목 전달
                    />
                </ExhibitionStyled>
            )}

            {/* CircleCard에서 hover된 아티스트 데이터를 CardList로 전달 */}
            <CircleCard onHover={handleHover} uniqueArtists={uniqueArtists} />
        </>
    );
};
export default Exhibition;
