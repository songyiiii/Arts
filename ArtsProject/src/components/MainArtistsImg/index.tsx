import { MainAristImgStyled } from './styled';
interface MainArtistsImgProps {
    hoverName: string | null;
}

// forwardRef를 사용하여 ref를 전달할 수 있도록 수정
const MainArtistsImg = ({ hoverName }: MainArtistsImgProps) => {

    
    return (
        <MainAristImgStyled>
            {hoverName && <img src={hoverName} alt={hoverName} style={{
                    opacity: hoverName ? 1 : 0, // hoverName이 있을 때 opacity 1로 설정
                }}/>}
        </MainAristImgStyled>
    );
};

export default MainArtistsImg;
