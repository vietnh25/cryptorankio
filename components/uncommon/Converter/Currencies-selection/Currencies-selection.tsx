import React from 'react';
import { EPosition } from '../../../../redux/slices/converter/reducers';
import CurrenciesSelectionStyled from './Currencies-selection-styled';
import Dropdown from './Dropdown/Dropdown';
import SwapButton from './Swap-button/Swap-button';

interface IProps {
    selectedCurrencyFrom: string,
    selectedCurrencyTo: string,
    swapCurrencies: () => any,
    currenciesFrom: any,
    currenciesTo: any
}

const CurrenciesSelection = ({selectedCurrencyFrom, selectedCurrencyTo, swapCurrencies, currenciesFrom, currenciesTo}: IProps) => {   
    const [isLeftDropdownOpen, setIsLeftDropdownOpen] = React.useState(false);
    const [isRightDropdownOpen, setIsRightDropdownOpen] = React.useState(false);

    return (
        <CurrenciesSelectionStyled>
            <Dropdown 
                selectedCurrency={selectedCurrencyFrom}
                isDropDownOpen={isLeftDropdownOpen}
                setIsDropdownOpen={() => {
                    setIsLeftDropdownOpen(!isLeftDropdownOpen);
                    setIsRightDropdownOpen(false);
                }}
                currencies={currenciesFrom}
                position={EPosition.LEFT}
            />
            <SwapButton swapCurrencies={swapCurrencies} />
            <Dropdown 
                selectedCurrency={selectedCurrencyTo}
                isDropDownOpen={isRightDropdownOpen}
                setIsDropdownOpen={() => {
                    setIsLeftDropdownOpen(false);
                    setIsRightDropdownOpen(!isRightDropdownOpen);
                }}
                currencies={currenciesTo}
                position={EPosition.RIGHT}
            />
        </CurrenciesSelectionStyled>
    );
};

export default CurrenciesSelection;
