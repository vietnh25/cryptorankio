import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ThemeProvider } from 'styled-components';

import Main from "./Main/Main";
import Footer from './Footer/Footer';
import Header from './Header/Header';
import LayoutStyled, { GlobalStyle } from './Layout-styled';
import Container from "../Container/Container";

interface IProps {
    children: JSX.Element
}

const Layout = ({children}: IProps) => {
    return (<ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
            <React.Fragment>
                <GlobalStyle />
                <Head>
                    <title>Cryptorank</title>
                    <meta name="description" content="Cryptocurrency portal" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <LayoutStyled>
                    <Header />
                    <Main>
                        <Container>
                            {children}
                        </Container>
                    </Main>
                    <Footer />
                </LayoutStyled>
            </React.Fragment>
        </ThemeProvider>);
};

export default Layout;
