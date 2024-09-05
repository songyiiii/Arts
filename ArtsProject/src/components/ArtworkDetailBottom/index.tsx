import { ArtworkDetailBottomStyled } from './styled';
interface artworkProps {
    artwork: {
        artist: { name: string; info?: string };
        category: string;
        frame: string;
        id: number;
        materials: string;
        price: number;
        rarity: string;
        size: string;
        src: { src: string };
        title: string;
    };
}
const ArtworkDetailBottom = ({ artwork }: artworkProps) => {
    return (
        <ArtworkDetailBottomStyled>
            {artwork.artist.info && (
                <div className="explanation">
                    <h3>작품설명 및 작가소개</h3>
                    <p>{artwork.artist.info}</p>
                </div>
            )}

            <div className="info">
                <p>
                    <span>materials</span>
                    {artwork.materials}
                </p>
                <p>
                    <span>size</span>
                    {artwork.size}
                </p>
                <p>
                    <span>frame</span>
                    {artwork.frame}
                </p>
                <p>
                    <span>rarity</span>
                    {artwork.rarity}
                </p>
            </div>
        </ArtworkDetailBottomStyled>
    );
};
export default ArtworkDetailBottom;
