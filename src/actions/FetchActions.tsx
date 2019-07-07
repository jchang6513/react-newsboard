import { Action } from 'redux';
import axios from "axios";
import { FetchActionTypes } from './FetchActionTypes';
import NewsFactory from "../data/NewsFactory";
import { News } from '../data/News';
import { NewsParams } from '../reducers/NewsReducer';
import { ErrorAction } from '../types/base.type';
import { Dispatch, PromiseAction } from '../types/redux.type';


axios.defaults.headers.common["X-Api-Key"] = process.env.REACT_APP_NEWS_KEY;
export interface NewsArrAction extends Action {
  newsArr: News[];
}

export interface IFetchActions {
  loadTopNewsArr(params: NewsParams): PromiseAction<any>;
}

export default class FetchActions implements IFetchActions {

  static _loadTopNewsArrStart = (): Action => {
    return ({ type: FetchActionTypes.LOAD_TOP_NEWS_START });
  }

  static _loadTopNewsArrSucces(newsArr: News[]): NewsArrAction {
    return ({ type: FetchActionTypes.LOAD_TOP_NEWS_SUCCESS, newsArr: newsArr });
  };

  static _loadTopNewsArrFail(err: Error): ErrorAction {
    return ({ type: FetchActionTypes.LOAD_TOP_NEWS_FAIL, err: err });
  };

  loadTopNewsArr = (params: NewsParams): PromiseAction<any> => {
    return async (dispatch: Dispatch): Promise<any> => {
      dispatch(FetchActions._loadTopNewsArrStart())
      await axios.get("https://newsapi.org/v2/top-headlines", { params: params })
        .then(response => {
          const newsArr = NewsFactory.createNewsArrayFromNet(response.data.articles);
          dispatch(FetchActions._loadTopNewsArrSucces(newsArr));
          return newsArr;
        })
        .catch(err => {
          dispatch(FetchActions._loadTopNewsArrFail(err));
          throw err
        });
    }
  }
};
