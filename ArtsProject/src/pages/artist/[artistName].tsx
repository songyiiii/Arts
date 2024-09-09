import { useRouter } from 'next/router';
import ArtistDetail from '@/components/ArtistDetail';

const ArtistPage = () => {
    const router = useRouter();
    const { artistName } = router.query;
    const artistNameString = typeof artistName === 'string' ? artistName : '';

    return (
        <>
            <ArtistDetail artistName={artistNameString} />
        </>
    );
};
export default ArtistPage;
