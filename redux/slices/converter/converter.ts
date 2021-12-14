
import { createSlice } from '@reduxjs/toolkit';

import extraReducers from "./extra-reducers";
import reducers from './reducers';

export interface IConverterSlice {
    amount: number,
    selectedCurrencyFrom: string,
    selectedCurrencyTo: string,
    availableCurrenciesFrom: any,
    availableCurrenciesTo: any,
}

const initialState: IConverterSlice = {
    amount: 1,
    selectedCurrencyFrom: "",
    selectedCurrencyTo: "",
    availableCurrenciesFrom: [],
    availableCurrenciesTo: [],
}

const converterSlice = createSlice({
    name: 'converter',
    initialState: initialState,
    reducers: reducers,
    extraReducers: extraReducers
});

export default converterSlice;

export {initialState};