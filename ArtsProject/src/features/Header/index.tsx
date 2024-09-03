import { HeaderStyled } from './styled';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="nav">
                <div className="logo">
                    <h1>Arts</h1>
                </div>
                <div className="menu">
                    <div>About</div>
                    <div>Artist</div>
                    <div>Display</div>
                </div>
            </div>
        </HeaderStyled>
    );
};
export default Header;
