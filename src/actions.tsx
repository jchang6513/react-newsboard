import axios from "axios";
import NewsFactory, { NewsType } from "./NewsFactory";
axios.defaults.headers.common["X-Api-Key"] = process.env.REACT_APP_NEWS_KEY;

export interface GetNewsCallbacks {
  onSuccess: (news: NewsType[]) => void;
  onError: (err: Error) => void;
}

export function getNews(
  page: number,
  callbacks: GetNewsCallbacks
): Promise<void> {
  const body = {
    country: "tw",
    category: "general",
    page: page,
    pageSize: 10
  };
  return axios
    .get("https://newsapi.org/v2/top-headlines", { params: body })
    .then(response => {
      const news = NewsFactory.createNewsArrayFromNet(response.data.articles);
      callbacks.onSuccess(news);
    })
    .catch(err => {
      callbacks.onError(err);
    });
}
