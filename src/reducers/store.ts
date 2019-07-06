import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import TopNews, { TopNewsState } from './TopNewsReducer';

export interface StoreState {
  TopNews: TopNewsState;
}

const store = createStore(
  combineReducers<StoreState>({
    TopNews,
  }),
  applyMiddleware(thunk)
)

export default store;
