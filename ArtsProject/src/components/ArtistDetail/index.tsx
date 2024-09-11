import { ArtworkListStyled } from '../ArtworkList/styled';
import ArtworkItem from '../ArtwrokItem';
import { ArtistDetailStyled } from './styled';
import { datas } from '@/utill/datas';

// Artist 데이터 타입 정의
interface Artist {
    name: string;
    information?: string;
    gallery?: {
        name: string;
        location?: string;
    };
    info?: string;
    history?: string[];
}
interface Artwork {
    id: number;
    title: string;
    price: number;
    size: string;
    src: { src: string };
    frame: string;
    materials: string;
    rarity: string;
    release: number;
    category: string;
    artist: {
        name: string;
        info: string;
        company: string;
    };
    description?: string;
}
interface ArtisrPageProps {
    artistName: string;
}

const ArtistDetail = ({ artistName }: ArtisrPageProps) => {
    const artistData = datas.filter((data) => data.artist.name === artistName);
    // console.log(artistData, '아티스트데이터');
    if (artistData.length === 0) {
        return <ArtistDetailStyled>Artist not found</ArtistDetailStyled>;
    }

    const artistInfo: Artist | undefined = artistData[0]?.artist;

    // console.log(artistInfo, '아티스트인포');
    return (
        <ArtistDetailStyled>
            <div className="detailTop">
                <h1>{artistInfo.name}</h1>
                <h2>{artistInfo.information}</h2>
                <h3>{artistInfo.gallery?.name}</h3>
                <p>{artistInfo.info}</p>

                {artistInfo.history && artistInfo.history.length > 0 && (
                    <div>
                        <h4>이력</h4>
                        {artistInfo.history.map((x: string, i) => {
                            return (
                                <div key={i}>
                                    <p>{x}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <h1 className="title">Artworks</h1>
            <ArtworkListStyled>
                {artistData.map((x, i) => {
                    return (
                        <ArtworkItem
                            key={i}
                            title={x.title}
                            artist={x.artist.name}
                            price={x.price}
                            imgUrl={x.src.src}
                            id={x.id}
                        />
                    );
                })}
            </ArtworkListStyled>
        </ArtistDetailStyled>
    );
};
export default ArtistDetail;
