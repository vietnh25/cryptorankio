import React from 'react';
import SwapButtonStyled from './Swap-button-styled';

interface IProps {
    swapCurrencies: () => any
}

const SwapButton = ({swapCurrencies}: IProps) => {
    return <SwapButtonStyled onClick={swapCurrencies}>
            <i className="fas fa-exchange-alt" />
    </SwapButtonStyled>
};

export default SwapButton;
