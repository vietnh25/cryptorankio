import { IWatchlistSlice } from "./watchlist";

const reducers = {
    setCurrenciesList: (state: IWatchlistSlice, action: any) => {
        state.currencies = action.payload.currencies;
    }
};

export default reducers;