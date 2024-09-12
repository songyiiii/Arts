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
    //exhibition데이터를 map으로 돌려서 작가들 이름만 추출
    const exhibitionArtist = exhibition.map((data) => data.name.name);

    // exhibitionArtist작가들을 순회하면서 datas데이터에 동일한 작가의 작품 1개씩 저장 
    const uniqueArtists = exhibitionArtist.map((artistName) =>
        datas.find((data) => data.artist.name === artistName)
    );
    console.log(uniqueArtists, '유니크');
    // uniqueArtists중에서도 첫번째인덱스만 저장시켜놓음
    const [currentArtist, setCurrentArtist] = useState<ArtistData | null>(
        uniqueArtists[0] || null
    );


    const getExhibitionTitle = (artistName: string) => {
        const exhibitionData = exhibition.find(
            (data) => data.name.name === artistName
        );
        // console.log(exhibitionData,'epdddf')
        return exhibitionData ? exhibitionData.title : 'Unknown Exhibition'; // 전시 제목이 없다면 기본값 'Unknown Exhibition'
    };
    // console.log(currentArtist, '커런ㅌ');
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
