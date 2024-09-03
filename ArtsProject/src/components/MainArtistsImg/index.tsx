import { MainAristImgStyled } from './styled';
interface MainArtistsImgProps {
    hoverName: string | null;
}

// forwardRef를 사용하여 ref를 전달할 수 있도록 수정
const MainArtistsImg = ({ hoverName }:MainArtistsImgProps) => {
    return (
        <MainAristImgStyled >
            {hoverName && <img src={hoverName} alt="Artist Work" />}
        </MainAristImgStyled>
    );
};

export default MainArtistsImg;
