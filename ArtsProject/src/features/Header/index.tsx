import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MenuOutlined } from '@ant-design/icons';
import { HeaderStyled } from './styled';

const Header = () => {
    const router = useRouter();
    const [scroll, setScroll] = useState(false); // 스크롤 여부 상태
    const [headerVisible, setHeaderVisible] = useState(true); // 헤더 표시 여부 상태
    const [lastScrollY, setLastScrollY] = useState(0); // 마지막 스크롤 위치 저장
    const [menuOpen, setMenuOpen] = useState(false); // 메뉴 열림 상태

    const handleNavigation = (link: string) => {
        router.push(link);
        setMenuOpen(false); // 메뉴 클릭 후 닫기
    };

    // 스크롤 이벤트 처리
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            currentScrollY > lastScrollY && currentScrollY > 40
                ? setHeaderVisible(false)
                : currentScrollY < lastScrollY
                ? setHeaderVisible(true)
                : null,
                currentScrollY > 50 ? setScroll(true) : setScroll(false);

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <HeaderStyled scroll={scroll} headerVisible={headerVisible} menuOpen={menuOpen}>
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
                <MenuOutlined
                    className="mobileIcon"
                    onClick={() => setMenuOpen((prev) => !prev)} // 메뉴 상태 토글
                    style={{
                        fontSize: '2rem',
                        transition: 'transform 0.3s ease',
                    }} // 아이콘 크기 및 애니메이션
                />
            </div>
        </HeaderStyled>
    );
};

export default Header;
