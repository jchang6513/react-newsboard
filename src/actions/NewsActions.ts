import { Action } from 'redux';
import { NewsActionTypes } from './NewsActionTypes';
import { NewsParams } from '../reducers/NewsReducer';
import { BooleanAction, ErrorAction } from '../types/redux.type';
import FetchActions, { IFetchActions } from './FetchActions';
import { Dispatch, PromiseAction } from '../types/redux.type';

export interface PartialTopNewsParamsAction extends Action {
  params: Partial<NewsParams>;
}

export interface INewsActions {
  setLoading: (value: boolean) => BooleanAction;
  setError: (err: Error) => ErrorAction;
  setParams: (params: Partial<NewsParams>) => PartialTopNewsParamsAction;
  loadNews: (params: NewsParams) => PromiseAction;
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

  setParams = (params: Partial<NewsParams>) => {
    return ({
      type: NewsActionTypes.SET_PARAMS,
      params: params
    })
  }

  resetTopNews = (): Action => {
    return ({
      type: NewsActionTypes.RESET_TOP_NEWS
    })
  }

  loadNews = (params: NewsParams): PromiseAction => {
    return async (dispatch: Dispatch): Promise<void> => {
      dispatch(this.setLoading(true))
      try {
        dispatch(this.setParams(params))
        await dispatch(this.fetchActions.loadTopNewsArr(params));
        dispatch(this.setLoading(false))
      } catch (err) {
        dispatch(this.setLoading(false))
        throw(err)
      }
    }
  }
}
