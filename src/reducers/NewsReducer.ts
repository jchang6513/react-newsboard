import { News } from '../data/News';
import { Action } from 'redux';
import { NewsActionTypes } from '../actions/NewsActionTypes';
import { BooleanAction, ErrorAction } from '../types/redux.type';
import { FetchActionTypes } from '../actions/FetchActionTypes';
import { NewsArrAction } from '../actions/FetchActions';

export interface NewsState {
  loading: boolean;
  error?: Error;
  newsArr?: News[];
  endOfNews: boolean;
}

const initState: NewsState = {
  loading: false,
  error: undefined,
  newsArr: undefined,
  endOfNews: false,
}

const reducer = (state: NewsState = initState, action: Action): NewsState => {
  switch (action.type) {
    case FetchActionTypes.LOAD_TOP_NEWS_SUCCESS:
      const { newsArr } = (action as NewsArrAction);
      return {
        ...state,
        newsArr: state.newsArr
          ? state.newsArr.concat(newsArr)
          : newsArr,
        endOfNews: newsArr.length < 1
      }
    case FetchActionTypes.LOAD_TOP_NEWS_FAIL:
      return {
        ...state,
        error: (action as ErrorAction).err
      }
    case NewsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: (action as BooleanAction).value
      }
    case NewsActionTypes.SET_ERROR:
      return {
        ...state,
        error: (action as ErrorAction).err
      }
    case NewsActionTypes.RESET_TOP_NEWS:
      return {
        ...state,
        newsArr: initState.newsArr
      }
    default:
      return state
  }
}

export default reducer;
