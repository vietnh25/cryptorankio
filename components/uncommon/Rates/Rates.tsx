import React from 'react';
import { useSelector } from 'react-redux';

import Heading from '../../common/Heading/Heading';
import RatesStyled from './Rates-styled';
import CurrencySwitch from './Currency-switch/Currency-switch';
import RatesTable from '../Rates-table/Rates-table';

export enum EPricedInCurrency {
    BTC = "BTC",
    ETH = "ETH",
    USD = "USD"
}

const Rates = () => {
    const currencies = useSelector((state: any) => state.watchlist.currencies);

    const [isDisplayedIn, setIsDisplayedIn] = React.useState(EPricedInCurrency.USD);

    const handleSwitchCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIsDisplayedIn(e.target.value as EPricedInCurrency)
    };

    return (
        <RatesStyled>
            <Heading>Rates Watchlist</Heading>
            <RatesTable currencies={currencies} isDisplayedIn={isDisplayedIn} />
            <CurrencySwitch handleSwitchCurrency={handleSwitchCurrency} />
        </RatesStyled>
    );
};

export default Rates;