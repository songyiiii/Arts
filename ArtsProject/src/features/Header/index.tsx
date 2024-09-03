import { HeaderStyled } from './styled';
import { useRouter } from 'next/router';
import { MenuOutlined } from '@ant-design/icons';

const Header = () => {
    const router = useRouter();
    const handleNavigation = (link: string) => {
        router.push(link);
    };
    return (
        <HeaderStyled>
            <div className="nav">
                <div className="logo" onClick={() => handleNavigation('/')}>
                    <h1>Arts</h1>
                </div>
                <div className="menu">
                    <div onClick={() => handleNavigation('/about')}>About</div>
                    <div onClick={() => handleNavigation('/artists')}>
                        Artist
                    </div>
                    <div onClick={() => handleNavigation('/artworks')}>
                        Artworks
                    </div>
                </div>
                <MenuOutlined className='mobileIcon'/>
            </div>
        </HeaderStyled>
    );
};
export default Header;
