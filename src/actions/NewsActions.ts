import { Action } from 'redux';
import { NewsActionTypes } from './NewsActionTypes';
import { BooleanAction, ErrorAction } from '../types/redux.type';
import FetchActions, { IFetchActions } from './FetchActions';
import { Dispatch, PromiseAction } from '../types/redux.type';
import { changeParamsPage, changeParamsCountry } from './ParamsActions';


export interface INewsActions {
  setLoading: (value: boolean) => BooleanAction;
  setError: (err: Error) => ErrorAction;
  loadMoreNews: (page: number) => PromiseAction;
  loadNewCountry: (country: string) => PromiseAction;
};

export default class NewsActionos implements INewsActions {

  private fetchActions: IFetchActions;

  constructor() {
    this.fetchActions = new FetchActions();
  }

  setLoading = (value: boolean) => {
    return ({
      type: NewsActionTypes.SET_LOADING,
      value: value
    })
  }

  setError = (err: Error) => {
    return ({
      type: NewsActionTypes.SET_ERROR,
      err: err
    })
  }

  resetNews = (): Action => {
    return ({
      type: NewsActionTypes.RESET_NEWS
    })
  }

  loadMoreNews = (page: number): PromiseAction => {
    return async (dispatch: Dispatch, getState): Promise<void> => {
      const params = {
        ...getState().Params,
        page
      }
      dispatch(this.setLoading(true))
      try {
        await dispatch(this.fetchActions.loadTopNewsArr(params));
        dispatch(changeParamsPage(page))
        dispatch(this.setLoading(false))
      } catch (err) {
        dispatch(this.setLoading(false))
        throw(err)
      }
    }
  }

  loadNewCountry = (country: string): PromiseAction => {
    return async (dispatch: Dispatch, getState): Promise<void> => {
      const params = {
        ...getState().Params,
        page: 1,
        country
      }
      dispatch(this.resetNews());
      dispatch(this.setLoading(true));
      try {
        await dispatch(this.fetchActions.loadTopNewsArr(params));
        dispatch(changeParamsCountry(country))
        dispatch(changeParamsPage(1))
        dispatch(this.setLoading(false))
      } catch (err) {
        dispatch(this.setLoading(false))
        throw(err)
      }
    }
  }

}
