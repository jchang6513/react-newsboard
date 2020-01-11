import { Action } from 'redux';
import axios from "axios";
import NewsFactory from "../data/NewsFactory";
import { News } from '../data/News';
import { Dispatch, PromiseAction, ThunkAction } from '../types/redux.type';
import { ParamsState, Country, Category } from '../reducers/ParamsReducer';
import { loadTopNewsArrStart, loadTopNewsArrSucces, loadTopNewsArrFail, setLoading, resetNews } from './NewsActions';
import { changeParamsPage, changeParamsCountry, changeParamsCategory } from './ParamsActions';


axios.defaults.headers.common["X-Api-Key"] = process.env.REACT_APP_NEWS_KEY;
export interface NewsArrAction extends Action {
  newsArr: News[];
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

const wrapApi = (action: ThunkAction): PromiseAction => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoading(true))
    try {
      await dispatch(action)
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setLoading(false))
      throw(err)
    }
  }
}

const wrapLoadNews = (action: (d: Dispatch, p: ParamsState) => Promise<void>) => (
  wrapApi((dispatch, getState) => (
    action(dispatch, getState().Params)
  ))
)

export const loadMoreNews = (page: number) => (wrapLoadNews(
  async (dispatch, prevParams) => {
    const params = {
      ...prevParams,
      page
    }
    await dispatch(loadTopNewsArr(params));
    dispatch(changeParamsPage(page))
  }
))

export const loadNewsFromCountry = (country: Country) => (wrapLoadNews(
  async (dispatch, prevParams) => {
    const params = {
      ...prevParams,
      page: 1,
      country
    }
    try {
      dispatch(resetNews());
      dispatch(changeParamsCountry(country))
      await dispatch(loadTopNewsArr(params));
      dispatch(changeParamsPage(1))
    } catch(err) {
      dispatch(changeParamsCountry(prevParams.country))
      dispatch(changeParamsPage(prevParams.page))
      throw err;
    }
  }
))

export const loadNewsWithCategory = (category: Category) => (wrapLoadNews(
  async (dispatch, prevParams) => {
    const params = {
      ...prevParams,
      page: 1,
      category
    }
    try {
      dispatch(resetNews());
      dispatch(changeParamsCategory(category))
      await dispatch(loadTopNewsArr(params));
      dispatch(changeParamsPage(1))
    } catch(err) {
      dispatch(changeParamsCategory(prevParams.category))
      dispatch(changeParamsPage(prevParams.page))
      throw err;
    }
  }
))
