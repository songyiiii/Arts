import { useRouter } from 'next/router';
import { ArtistPageStyled } from './styled';
import ArtistDetail from '@/components/ArtistDetail';

const ArtistPage = () => {
    const router = useRouter();
    const { artistName } = router.query;
    return(
        <ArtistPageStyled>
            <ArtistDetail artistName={artistName}/>
        </ArtistPageStyled>
    )
}
export default ArtistPage