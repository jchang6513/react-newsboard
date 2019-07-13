import { Action } from 'redux';
import axios from "axios";
import NewsFactory from "../data/NewsFactory";
import { News } from '../data/News';
import { Dispatch, PromiseAction } from '../types/redux.type';
import { ParamsState } from '../reducers/ParamsReducer';
import { loadTopNewsArrStart, loadTopNewsArrSucces, loadTopNewsArrFail, setLoading, resetNews } from './NewsActions';
import { changeParamsPage, changeParamsCountry } from './ParamsActions';


axios.defaults.headers.common["X-Api-Key"] = process.env.REACT_APP_NEWS_KEY;
export interface NewsArrAction extends Action {
  newsArr: News[];
}

const wrapApi = (action: (d: Dispatch, p: ParamsState) => PromiseAction): PromiseAction => {
  return async (dispatch: Dispatch, getState): Promise<void> => {
    dispatch(setLoading(true))
    try {
      await dispatch(action(dispatch, getState().Params))
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setLoading(false))
      throw(err)
    }
  }
}

export const loadTopNewsArr = (params: ParamsState): PromiseAction<any> => {
  return async (dispatch: Dispatch): Promise<any> => {
    dispatch(loadTopNewsArrStart())
    await axios.get("https://newsapi.org/v2/top-headlines", { params: params })
      .then(response => {
        const newsArr = NewsFactory.createNewsArrayFromNet(response.data.articles);
        dispatch(loadTopNewsArrSucces(newsArr));
        return newsArr;
      })
      .catch(err => {
        dispatch(loadTopNewsArrFail(err));
        throw err
      });
  }
}

export const loadMoreNews = (page: number) => (
  wrapApi((dispatch: Dispatch, prevParams: ParamsState) => async () => {
    const params = {
      ...prevParams,
      page
    }
    await dispatch(loadTopNewsArr(params));
    dispatch(changeParamsPage(page))
  })
)

export const loadNewCountry = (country: string) => (
  wrapApi((dispatch: Dispatch, prevParams: ParamsState) => async () => {
    const params = {
      ...prevParams,
      page: 1,
      country
    }
    dispatch(resetNews());
    await dispatch(loadTopNewsArr(params));
    dispatch(changeParamsCountry(country))
    dispatch(changeParamsPage(1))
  })
)
