import { LocationStyled } from './styled';
import Map from '../Map';
import MapText from '../MapText';
const Location = () => {
    return (
        <div className='locationWrap'>
            <LocationStyled>
                <Map />
                <MapText />
            </LocationStyled>
        </div>
    );
};
export default Location;
