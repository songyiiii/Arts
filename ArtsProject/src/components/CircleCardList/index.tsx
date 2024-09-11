import { CircleCardListStyled } from './styled';
interface CircleCardProps {
    imgSrc: string;
    title: string;
    onHover: () => void; // hover 시 호출할 함수
}
const CircleCardList: React.FC<CircleCardProps> = ({ imgSrc, title, onHover }) => {
    return (
        <CircleCardListStyled
            title={title}
            onMouseEnter={onHover} // hover 시 onHover 함수 호출
        >
            <div className='list'>
                <div className='listImg'><img src={imgSrc} alt={title} /></div>
            </div>
        </CircleCardListStyled>
    );
};
export default CircleCardList;
