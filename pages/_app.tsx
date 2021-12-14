import App from "next/app";
import React from "react";

import { wrapper } from "../redux/store";

const MyApp = ({ Component, pageProps }: any) => {
    return (
        <React.Fragment>
            <Component {...pageProps} />
        </React.Fragment>
    );
};

MyApp.getInitialProps = async (appContext: any) => {
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
};

export default wrapper.withRedux(MyApp);