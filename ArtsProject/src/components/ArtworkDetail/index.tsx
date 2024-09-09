import { ArtworkDetailStyled } from './styled';
import { useRouter } from 'next/router';
import { datas } from '../../utill/datas';
import ArtworkDetailTop from '../ArtworkDetailTop';
import ArtworkDetailBottom from '../ArtworkDetailBottom';
import ArtworkItem from '../ArtwrokItem';
import { ArtworkListStyled } from '../ArtworkList/styled';

const ArtworkDetail = () => {
    const router = useRouter();
    const { title } = router.query;

    const artwork = datas.find((item) => item.title === title);

    console.log(artwork, '아트워크확인ㄹ아ㅣ눙힌');
    if (!artwork) {
        return <div>Artwork not found</div>;
    }
    const otherArtworks = datas.filter(
        (item) =>
            item.artist.name === artwork.artist.name && item.title !== title
    );
    // console.log(otherArtworks, '아더확인');
    return (
        <ArtworkDetailStyled>
            <ArtworkDetailTop artwork={artwork}></ArtworkDetailTop>
            <ArtworkDetailBottom artwork={artwork}>

            </ArtworkDetailBottom>
            {otherArtworks.length > 0 && (
                <div className='other'>
                    <h1>Other works by this artist</h1>
                    <ArtworkListStyled>
                        {otherArtworks.map((otherArtwork) => (
                            <ArtworkItem
                                key={otherArtwork.id}
                                id={otherArtwork.id}
                                title={otherArtwork.title}
                                artist={otherArtwork.artist.name}
                                price={otherArtwork.price}
                                imgUrl={otherArtwork.src.src}
                            />
                        ))}
                    </ArtworkListStyled>
                </div>
            )}
        </ArtworkDetailStyled>
    );
};
export default ArtworkDetail;
