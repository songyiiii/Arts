import { CircleCardListStyled } from './styled';
interface CircleCardProps {
    imgSrc:string
    title:string
    
}
const CircleCardList = ({imgSrc,title}:CircleCardProps) => {
    // console.log(data,'데이터')
    return <CircleCardListStyled title={title}>
        <div className='list'>
            <div className='listImg'><img src={imgSrc} alt={title}></img></div>
        </div>
    </CircleCardListStyled>;
};
export default CircleCardList;
