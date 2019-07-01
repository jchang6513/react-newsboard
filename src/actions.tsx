import axios from "axios";
import NewsFactory, { NewsType } from "./NewsFactory";

export interface GetNewsCallbacks {
  onSuccess: (news: NewsType[]) => void;
  onError: (err: Error) => void;
}
const apiKey: string = process.env.REACT_APP_NEWS_KEY;
export function getNews(
  page: number,
  callbacks: GetNewsCallbacks
): Promise<void> {
  const body = {
    country: "tw",
    category: "business",
    apiKey: apiKey,
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
