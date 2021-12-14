
import {HYDRATE} from 'next-redux-wrapper';

import { } from "./thunks";
import { IConverterSlice } from "./converter";

const extraReducers = (builder: any) => {
    builder
      .addCase(HYDRATE, (state: IConverterSlice, action: any) => {
          if (typeof window !== 'undefined') return action.payload.converter;
      });
};

export default extraReducers; 