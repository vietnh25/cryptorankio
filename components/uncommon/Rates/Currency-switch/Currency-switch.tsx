import React from 'react';
import CurrencySwitchStyled from './Currency-switch-styled';

interface IProps {
    handleSwitchCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const CurrencySwitch = ({handleSwitchCurrency}: IProps) => {
    return (
        <CurrencySwitchStyled>
            
        </CurrencySwitchStyled>
    );
};

export default CurrencySwitch;