import { MainAristImgStyled } from './styled';
import { useRouter } from 'next/router';
interface MainArtistsImgProps {
    hoverName: string | null;
    artworkTitle: string | null;
}

// forwardRef를 사용하여 ref를 전달할 수 있도록 수정
const MainArtistsImg = ({ hoverName,artworkTitle }: MainArtistsImgProps) => {
    const router = useRouter();
    const handleClick = () => {
        if (artworkTitle) {
            router.push(`/artwork/${artworkTitle}`); // artworkId를 통해 상세 페이지로 이동
        }
    };

    return (
        <MainAristImgStyled>
            {hoverName && (
                <img
                    onClick={handleClick}
                    src={hoverName}
                    alt={hoverName}
                    style={{
                        opacity: hoverName ? 1 : 0, // hoverName이 있을 때 opacity 1로 설정
                    }}
                />
            )}
        </MainAristImgStyled>
    );
};

export default MainArtistsImg;
