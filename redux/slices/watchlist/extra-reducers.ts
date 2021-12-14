
import {HYDRATE} from 'next-redux-wrapper';

import { } from "./thunks";
import { IWatchlistSlice } from "./watchlist";

const extraReducers = (builder: any) => {
    builder
      .addCase(HYDRATE, (state: IWatchlistSlice, action: any) => {
          if (typeof window !== 'undefined') return action.payload.watchlist;
      });
};

export default extraReducers; 