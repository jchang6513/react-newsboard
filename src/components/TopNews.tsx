import React from "react";
import { News } from '../data/News';
import { TopNewsParams } from '../reducers/TopNewsReducer';

interface TopNewsProps {
  params: TopNewsParams;
  newsArr?: News[];
  loadNews: (params: TopNewsParams) => void;
}

export default class TopNews extends React.Component<TopNewsProps, {}> {
  constructor(props: TopNewsProps) {
    super(props);
  }
  componentDidMount() {
    const { params, loadNews } = this.props;
    loadNews(params);
    document.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const { params, loadNews } = this.props;
    const isBottom =
      (document.getElementById("App") as any).getBoundingClientRect().bottom <= window.innerHeight;

    if (isBottom) {
      const newParams = {
        ...params,
        page: params.page + 1
      }
      loadNews(newParams);
    }
  };
  render(): JSX.Element {
    const { newsArr } = this.props;
    const noWaterFall = 2;
    const waterFalls = Array(noWaterFall)
      .fill(0)
      .map((e, i) => i + 1);

    return (
      <div className="news-grids">
        {waterFalls.map(waterFall => (
          <div key={waterFall} className="waterfall">
            {newsArr && newsArr.map((news, index) => {
              return index % noWaterFall === waterFall - 1 ? (
                <div key={news.url} className="news-grid">
                  <a href={news.url}>
                    <img src={news.urlToImage} alt="" />
                    <p className="news-title">{news.title}</p>
                  </a>
                </div>
              ) : null;
            })}
          </div>
        ))}
      </div>
    );
  }
}


