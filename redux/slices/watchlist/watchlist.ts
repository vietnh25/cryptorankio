
import { createSlice } from '@reduxjs/toolkit';

import extraReducers from "./extra-reducers";
import reducers from './reducers';

export interface IWatchlistSlice {
    currencies: Array<any>
}

const initialState: IWatchlistSlice = {
    currencies: []
}

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState: initialState,
    reducers: reducers,
    extraReducers: extraReducers
});

export default watchlistSlice;

export {initialState};