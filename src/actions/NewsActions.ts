import { Action } from 'redux';
import { NewsActionTypes } from './NewsActionTypes';
import { NewsArrAction } from './FetchActions';
import { ErrorAction } from '../types/redux.type';
import { News } from '../data/News';

export const setLoading = (value: boolean) => {
  return ({
    type: NewsActionTypes.SET_LOADING,
    value: value
  })
}

export const setError = (err: Error) => {
  return ({
    type: NewsActionTypes.SET_ERROR,
    err: err
  })
}

export const resetNews = (): Action => {
  return ({
    type: NewsActionTypes.RESET_NEWS
  })
}

export const loadTopNewsArrStart = (): Action => {
  return ({ type: NewsActionTypes.LOAD_TOP_NEWS_START });
}

export const loadTopNewsArrSucces = (newsArr: News[]): NewsArrAction => {
  return ({
    type: NewsActionTypes.LOAD_TOP_NEWS_SUCCESS,
    newsArr: newsArr
  });
};

export const loadTopNewsArrFail = (err: Error): ErrorAction => {
  return ({
    type: NewsActionTypes.LOAD_TOP_NEWS_FAIL,
    err: err
  });
};
