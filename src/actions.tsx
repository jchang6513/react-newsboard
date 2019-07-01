import axios from "axios";
import NewsFactory from "./NewsFactory";

const apiKey: string = process.env.REACT_APP_NEWS_KEY;
export function getNews(page: number) {
  const body = {
    country: "tw",
    apiKey: apiKey,
    page: page
  };
  axios
    .get("https://newsapi.org/v2/top-headlines", { params: body })
    .then(response =>
      console.log(NewsFactory.createNewsArrayFromNet(response.data.articles))
    )
    .catch(err => console.log(err));
}
