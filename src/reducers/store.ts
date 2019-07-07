import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import News, { NewsState } from './NewsReducer';
import Params, { ParamsState } from './ParamsReducer';

export interface StoreState {
  News: NewsState;
  Params: ParamsState;
}

const store = createStore(
  combineReducers<StoreState>({
    News,
    Params
  }),
  applyMiddleware(thunk)
)

export default store;
