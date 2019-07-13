import { Action } from 'redux';
import { NewsActionTypes } from './NewsActionTypes';
import { BooleanAction, ErrorAction } from '../types/redux.type';
import { loadTopNewsArr } from './FetchActions';
import { Dispatch, PromiseAction } from '../types/redux.type';
import { changeParamsPage, changeParamsCountry } from './ParamsActions';


export interface INewsActions {
  setLoading: (value: boolean) => BooleanAction;
  setError: (err: Error) => ErrorAction;
  loadMoreNews: (page: number) => PromiseAction;
  loadNewCountry: (country: string) => PromiseAction;
};

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

export const loadMoreNews = (page: number): PromiseAction => {
  return async (dispatch: Dispatch, getState): Promise<void> => {
    const params = {
      ...getState().Params,
      page
    }
    dispatch(setLoading(true))
    try {
      await dispatch(loadTopNewsArr(params));
      dispatch(changeParamsPage(page))
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setLoading(false))
      throw(err)
    }
  }
}

export const loadNewCountry = (country: string): PromiseAction => {
  return async (dispatch: Dispatch, getState): Promise<void> => {
    const params = {
      ...getState().Params,
      page: 1,
      country
    }
    dispatch(resetNews());
    dispatch(setLoading(true));
    try {
      await dispatch(loadTopNewsArr(params));
      dispatch(changeParamsCountry(country))
      dispatch(changeParamsPage(1))
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setLoading(false))
      throw(err)
    }
  }
}
