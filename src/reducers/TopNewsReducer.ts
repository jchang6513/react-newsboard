import { News } from '../data/News';
import { Action } from 'redux';
import { TopNewsActionTypes } from '../actions/TopNewsActionTypes';
import { BooleanAction, ErrorAction } from '../types/base.type';
import { TopNewsParamsAction } from '../actions/TopNewsActions';
import { FetchActionTypes } from '../actions/FetchActionTypes';
import { NewsArrAction } from '../actions/FetchActions';

export interface TopNewsParams {
  country: string;
  category: string;
  q: string;
  page: number;
  pageSize: number;
}

export interface TopNewsState {
  loading: boolean;
  error?: Error;
  params: TopNewsParams;
  newsArr?: News[];
}

const initState: TopNewsState = {
  loading: false,
  error: undefined,
  params: {
    country: 'tw',
    category: 'general',
    q: '',
    page: 1,
    pageSize: 10,
  },
  newsArr: undefined,
}

const reducer = (state: TopNewsState = initState, action: Action): TopNewsState => {
  switch (action.type) {
    case FetchActionTypes.LOAD_TOP_NEWS_SUCCESS:
      return {
        ...state,
        newsArr: state.newsArr
          ? state.newsArr.concat((action as NewsArrAction).newsArr)
          : (action as NewsArrAction).newsArr
      }
    case FetchActionTypes.LOAD_TOP_NEWS_FAIL:
      return {
        ...state,
        error: (action as ErrorAction).err
      }
    case TopNewsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: (action as BooleanAction).value
      }
    case TopNewsActionTypes.SET_ERROR:
      return {
        ...state,
        error: (action as ErrorAction).err
      }
    case TopNewsActionTypes.SET_PARAMS:
      return {
        ...state,
        params: (action as TopNewsParamsAction).params
      }
    default:
      return state
  }
}

export default reducer;
