import CircleCardList from '../CircleCardList';
import { CircleCardStyled } from './styled';
import { exhibition, datas } from '@/utill/datas';

interface CircleCardProps {
    onHover: (artistData: any) => void; // hover 시 데이터를 전달하는 함수
}

const CircleCard: React.FC<CircleCardProps> = ({ onHover }) => {
    const exhibitionArtist = exhibition.map((data) => data.name.name);
    const uniqueArtists = exhibitionArtist.map((artistName) =>
        datas.find((data) => data.artist.name === artistName)
    );

    return (
        <CircleCardStyled>
            {uniqueArtists.map((x) => {
                return x ? (
                    <CircleCardList
                        key={x.title}
                        imgSrc={x.src.src}
                        title={x.title}
                        onHover={() => onHover(x)} // hover 이벤트 발생 시 부모 컴포넌트에 전달
                    />
                ) : null;
            })}
        </CircleCardStyled>
    );
};
export default CircleCard;
