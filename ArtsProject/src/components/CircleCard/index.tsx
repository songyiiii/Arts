import CircleCardList from '../CircleCardList';
import { CircleCardStyled } from './styled';
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

interface CircleCardProps {
    onHover: (artistData: ArtistData) => void; 
    uniqueArtists: (ArtistData | undefined)[];
}

const CircleCard: React.FC<CircleCardProps> = ({ onHover, uniqueArtists }) => {
    return (
        <CircleCardStyled>
            {uniqueArtists.map((x) => {
                return x ? (
                    <CircleCardList
                        key={x.title}
                        imgSrc={x.src.src}
                        title={x.title}
                        onHover={() => onHover(x)}
                    />
                ) : null;
            })}
        </CircleCardStyled>
    );
};
export default CircleCard;
