import CircleCardList from '../CircleCardList';
import { CircleCardStyled } from './styled';
import { exhibition, datas } from '@/utill/datas';

interface CircleCardProps {
    onHover: (artistData: ArtistData) => void; // ArtistData로 타입 지정
    uniqueArtists: (ArtistData | undefined)[];
}

const CircleCard: React.FC<CircleCardProps> = ({ onHover, uniqueArtists, }) => {


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
