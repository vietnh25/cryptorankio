import { useDispatch, useSelector } from 'react-redux';

import Amount from './Amount/Amount';
import CalculationResult from './Calculation-result/Calculation-result';
import ConverterStyled from './Converter-styled';
import CurrenciesSelection from './Currencies-selection/Currencies-selection';
import Heading from "../../common/Heading/Heading-styled"
import { AppState } from '../../../redux/store';
import converterSlice from '../../../redux/slices/converter/converter';

const Converter = () => {
    const {converter}  = useSelector((state: AppState) => state);
    const dispatch = useDispatch();
    const swapCurrencies = () => dispatch(converterSlice.actions.swapSelectedCurrencies());

    const correctAmountFromInBTC = converter?.amount / converter?.availableCurrenciesFrom[converter?.selectedCurrencyFrom]?.price;
    const correctAmountToInBTC = correctAmountFromInBTC * converter?.availableCurrenciesFrom[converter?.selectedCurrencyTo]?.price;

    return (
        <ConverterStyled>
            <Heading>Cryptocurrency Converter Calculator</Heading>
            <Amount amount={converter.amount} dispatch={dispatch}/>
            <CurrenciesSelection 
                selectedCurrencyFrom={converter.selectedCurrencyFrom} 
                selectedCurrencyTo={converter.selectedCurrencyTo}
                swapCurrencies={swapCurrencies}
                currenciesFrom={Object.keys(converter.availableCurrenciesFrom)}
                currenciesTo={Object.keys(converter.availableCurrenciesTo)}
            />
            <CalculationResult 
                amountFrom={converter.amount} 
                amountTo={correctAmountToInBTC}
                selectedCurrencyFrom={converter.selectedCurrencyFrom} 
                selectedCurrencyTo={converter.selectedCurrencyTo}
            />
        </ConverterStyled>
    );
};

export default Converter;