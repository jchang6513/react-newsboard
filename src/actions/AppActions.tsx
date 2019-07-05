import { Action } from 'redux';
import axios from "axios";
import { AppActionTypes } from 'actions/AppActionTypes';
import NewsFactory from "data/NewsFactory";
import { News } from 'data/News';

axios.defaults.headers.common["X-Api-Key"] = process.env.REACT_APP_NEWS_KEY;

export interface ApiParams {
  country: string;
  category: string;
  q: string;
  page: string;
  per: string;
}

export interface ErrorAction extends Action {
  err: Error
}

interface NewsArrAction extends Action {
  newsArr: News[];
}

interface IAppActionsStatic {
  _loadNewsArrStart(): Action;
  _loadNewsArrSucces: (news: News[]) => NewsArrAction;
  _loadNewsArrFail: (err: Error) => ErrorAction;
}

interface IAppActions {
  loadNewsArr(params: ApiParams): Promise<void>;
}

export const AppActions: IAppActionsStatic = class implements IAppActions {

  static _loadNewsArrStart = () => {
    return ({ type: AppActionTypes.LOAD_NEWS_START });
  }

  static _loadNewsArrSucces(newsArr: News[]) {
    return ({ type: AppActionTypes.LOAD_NEWS_SUCCESS, newsArr: newsArr });
  };

  static _loadNewsArrFail(err: Error) {
    return ({ type: AppActionTypes.LOAD_NEWS_FAIL, err: err });
  };

  loadNewsArr = (params: ApiParams): Promise<void> => {
    return axios
      .get("https://newsapi.org/v2/top-headlines", { params: params })
      .then(response => {
        const newsArr = NewsFactory.createNewsArrayFromNet(response.data.articles);
        AppActions._loadNewsArrSucces(newsArr);
      })
      .catch(err => {
        AppActions._loadNewsArrFail(err);
      });
  }
};
