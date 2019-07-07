import { Action } from 'redux';
import { NewsActionTypes } from './NewsActionTypes';
import { BooleanAction, ErrorAction } from '../types/redux.type';
import FetchActions, { IFetchActions } from './FetchActions';
import { Dispatch, PromiseAction } from '../types/redux.type';
import { changeParamsPage } from './ParamsActions';
import { ParamsState } from '../reducers/ParamsReducer';

export interface PartialTopNewsParamsAction extends Action {
  params: Partial<ParamsState>;
}

export interface INewsActions {
  setLoading: (value: boolean) => BooleanAction;
  setError: (err: Error) => ErrorAction;
  loadMoreNews: (params: ParamsState) => PromiseAction;
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

  loadMoreNews = (params: ParamsState): PromiseAction => {
    const { page } = params;
    return async (dispatch: Dispatch): Promise<void> => {
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
}
