import { LocationStyled } from './styled';
import Map from '../Map';
import MapText from '../MapText';
const Location = () => {
    return (
        <div className="locationWrap">
            <h2 style={{borderBottom:'1px solid black', marginBottom:'20px'}}>LOCATION</h2>
            <LocationStyled>
                <Map />
                <MapText />
            </LocationStyled>
        </div>
    );
};
export default Location;
