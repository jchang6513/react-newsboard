import { Action } from 'redux';
import axios from "axios";
import { FetchActionTypes } from './FetchActionTypes';
import NewsFactory from "../data/NewsFactory";
import { News } from '../data/News';
import { ErrorAction } from '../types/redux.type';
import { Dispatch, PromiseAction } from '../types/redux.type';
import { ParamsState } from '../reducers/ParamsReducer';


axios.defaults.headers.common["X-Api-Key"] = process.env.REACT_APP_NEWS_KEY;
export interface NewsArrAction extends Action {
  newsArr: News[];
}
const _loadTopNewsArrStart = (): Action => {
  return ({ type: FetchActionTypes.LOAD_TOP_NEWS_START });
}

const _loadTopNewsArrSucces = (newsArr: News[]): NewsArrAction => {
  return ({ type: FetchActionTypes.LOAD_TOP_NEWS_SUCCESS, newsArr: newsArr });
};

const _loadTopNewsArrFail = (err: Error): ErrorAction => {
  return ({ type: FetchActionTypes.LOAD_TOP_NEWS_FAIL, err: err });
};

export const loadTopNewsArr = (params: ParamsState): PromiseAction<any> => {
  return async (dispatch: Dispatch): Promise<any> => {
    dispatch(_loadTopNewsArrStart())
    await axios.get("https://newsapi.org/v2/top-headlines", { params: params })
      .then(response => {
        const newsArr = NewsFactory.createNewsArrayFromNet(response.data.articles);
        dispatch(_loadTopNewsArrSucces(newsArr));
        return newsArr;
      })
      .catch(err => {
        dispatch(_loadTopNewsArrFail(err));
        throw err
      });
  }
}
