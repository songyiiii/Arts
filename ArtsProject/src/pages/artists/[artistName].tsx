import { useRouter } from 'next/router';
import { ArtistPageStyled } from './styled';

const ArtistPage = () => {
    const router = useRouter();
    const { artistName } = router.query;
    return(
        <ArtistPageStyled>
            <h1>{artistName}</h1>
        </ArtistPageStyled>
    )
}
export default ArtistPage