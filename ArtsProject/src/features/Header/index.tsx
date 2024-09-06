import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MenuOutlined } from '@ant-design/icons';
import { HeaderStyled } from './styled';

const Header = () => {
    const router = useRouter();
    const [scroll, setScroll] = useState(false); // 스크롤 여부 상태
    const [headerVisible, setHeaderVisible] = useState(true); // 헤더 표시 여부 상태
    const [lastScrollY, setLastScrollY] = useState(0); // 마지막 스크롤 위치 저장

    const handleNavigation = (link: string) => {
        router.push(link);
    };

    // 스크롤 이벤트 처리
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // console.log(currentScrollY,'커런트스크롤와이')
            // console.log(lastScrollY,'라스트스크롤와이')

            currentScrollY > lastScrollY && currentScrollY > 40 
            ? setHeaderVisible(false)
            :currentScrollY < lastScrollY
            ? setHeaderVisible(true):null,

            currentScrollY > 50
            ? setScroll(true)
            : setScroll(false)

            setLastScrollY(currentScrollY); 
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, [lastScrollY]); 

    return (
        <HeaderStyled scroll={scroll} headerVisible={headerVisible}> 
            <div className="nav">
                <div className="logo" onClick={() => handleNavigation('/')}>
                    <h1>Arts</h1>
                </div>
                <div className="menu">
                    <div onClick={() => handleNavigation('/about')}>About</div>
                    <div onClick={() => handleNavigation('/artists')}>Artist</div>
                    <div onClick={() => handleNavigation('/artworks')}>Artworks</div>
                </div>
                <MenuOutlined className="mobileIcon" />
            </div>
        </HeaderStyled>
    );
};

export default Header;
