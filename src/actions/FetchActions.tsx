import { Action } from 'redux';
import axios from "axios";
import { FetchActionTypes } from 'actions/FetchActionTypes';
import NewsFactory from "data/NewsFactory";
import { News } from 'data/News';
import { TopNewsParams } from 'reducers/TopNewsReducer';
import { ErrorAction } from 'types/Base.type';

axios.defaults.headers.common["X-Api-Key"] = process.env.REACT_Fetch_NEWS_KEY;

export interface NewsArrAction extends Action {
  newsArr: News[];
}

interface IFetchActionsStatic {
  _loadTopNewsArrStart(): Action;
  _loadTopNewsArrSucces: (news: News[]) => NewsArrAction;
  _loadTopNewsArrFail: (err: Error) => ErrorAction;
}

interface IFetchActions {
  loadTopNewsArr(params: TopNewsParams): Promise<void>;
}

export const FetchActions: IFetchActionsStatic = class implements IFetchActions {

  static _loadTopNewsArrStart = () => {
    return ({ type: FetchActionTypes.LOAD_TOP_NEWS_START });
  }

  static _loadTopNewsArrSucces(newsArr: News[]) {
    return ({ type: FetchActionTypes.LOAD_TOP_NEWS_SUCCESS, newsArr: newsArr });
  };

  static _loadTopNewsArrFail(err: Error) {
    return ({ type: FetchActionTypes.LOAD_TOP_NEWS_FAIL, err: err });
  };

  loadTopNewsArr = (params: TopNewsParams): Promise<void> => {
    FetchActions._loadTopNewsArrStart();
    return axios
      .get("https://newsapi.org/v2/top-headlines", { params: params })
      .then(response => {
        const newsArr = NewsFactory.createNewsArrayFromNet(response.data.articles);
        FetchActions._loadTopNewsArrSucces(newsArr);
      })
      .catch(err => {
        FetchActions._loadTopNewsArrFail(err);
      });
  }
};
