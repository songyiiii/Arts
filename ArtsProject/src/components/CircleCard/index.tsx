import CircleCardList from '../CircleCardList';
import { CircleCardStyled } from './styled';
import { exhibition2,datas } from '@/utill/datas';

const CircleCard = () => {
    // console.log(datas,'데이터스')
    // console.log(exhibition2 ,'전시2')
    const exhibitionArtist = exhibition2.map((data) => data.name.name)
    const filterDatas = datas.filter((data) =>
        exhibitionArtist.includes(data.artist.name)
    );    console.log(filterDatas,'필터데이터')
    return (
        <CircleCardStyled>
            {filterDatas?.map((x, i) => {
                // console.log(x,'dprtm')
                return <CircleCardList   imgSrc={x.src.src} title={x.title}/>;
            })}
        </CircleCardStyled>
    );
};
export default CircleCard;
