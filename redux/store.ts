import { configureStore, combineReducers, ThunkAction, Action, EnhancedStore } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from "next-redux-wrapper";
import thunk from 'redux-thunk';

import converterSlice from './slices/converter/converter';
import watchlistSlice from './slices/watchlist/watchlist';

const reducers: any = combineReducers({
  converter: converterSlice.reducer,
  watchlist: watchlistSlice.reducer
});

const setupStore = (context: any): EnhancedStore => {
  // if (process.env.NODE_ENV === 'development') {
  //   middleware.push(logger);
  // }

  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    //devTools: process.env.NODE_ENV === 'development'
  });
};

export const makeStore: MakeStore<ReturnType<typeof setupStore>> = (context) => setupStore(context);

// Wrapper-specific
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: process.env.NODE_ENV === 'development' });