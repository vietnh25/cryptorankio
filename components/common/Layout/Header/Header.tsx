import Link from 'next/link';

import HeaderStyled from './Header-styled';

const Header = () => {
    return (
        <HeaderStyled>
            <span>
                <Link href="/">
                    <a>Cryptorank</a>
                </Link>
            </span>
            <nav>
                <ul>
                    <li>
                        <Link href="/rates">
                            <a>Active IEO/ICOs</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyled>
    );
};

export default Header;
