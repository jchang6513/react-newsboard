import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import News, { NewsState } from './NewsReducer';

export interface StoreState {
  News: NewsState;
}

const store = createStore(
  combineReducers<StoreState>({
    News
  }),
  applyMiddleware(thunk)
)

export default store;
