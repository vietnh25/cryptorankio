import { IConverterSlice } from "./converter";

interface ISetAmountAction {
    payload: number
}

interface ICurrencyObject {
    ["key"]: {
        price: number,
        volume24h: number,
        high24h: number,
        low24h: number,
        marketCap: number,
        prcentChange24h: number,
        prcentChange7d: number,
        prcentChange30d: number,
        prcentChange3m: number,
        prcentChange6m: number
    }
}

interface ISetCurrenciesListAction {
    payload: {
        availableCurrenciesFrom: ICurrencyObject,
        availableCurrenciesTo: ICurrencyObject,
        selectedCurrencyFrom: string,
        selectedCurrencyTo: string
    }
}

export enum EPosition {
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

interface ISelectCurrencyAction {
    payload: {
        position: EPosition,
        currency: string
    }
}

const reducers = {
    setAmount: (state: IConverterSlice, action: ISetAmountAction) => {
        state.amount = action.payload;
    },
    setCurrenciesLists: (state: IConverterSlice, action: ISetCurrenciesListAction) => {
        state.availableCurrenciesFrom = action.payload.availableCurrenciesFrom;
        state.availableCurrenciesTo = action.payload.availableCurrenciesTo;
        state.selectedCurrencyFrom = action.payload.selectedCurrencyFrom;
        state.selectedCurrencyTo = action.payload.selectedCurrencyTo;
    },
    swapSelectedCurrencies: (state: IConverterSlice) => {
        const temp = state.selectedCurrencyFrom;
        state.selectedCurrencyFrom = state.selectedCurrencyTo;
        state.selectedCurrencyTo = temp;
    },
    selectCurrency: (state: IConverterSlice, action: ISelectCurrencyAction) => {
        if(action.payload.position === EPosition.LEFT) {
            state.selectedCurrencyFrom = action.payload.currency;
        } else {
            state.selectedCurrencyTo = action.payload.currency;
        }
    }
};

export default reducers;