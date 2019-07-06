import React from "react";
import { TopNewsProps } from '../container/TopNewsContainer';
import LoadingDots from './LoadingDots';

export default class TopNews extends React.Component<TopNewsProps, {}> {
  constructor(props: TopNewsProps) {
    super(props);
  }
  componentDidMount() {
    const { params, loadNews } = this.props;
    loadNews(params);
  }
  loadMore = () => {
    const { params, loadNews } = this.props;
    const newParams = {
      ...params,
      page: params.page + 1
    }
    loadNews(newParams);
  };

  render(): JSX.Element {
    const { loading, newsArr } = this.props;
    const noWaterFall = 2;
    const waterFalls = Array(noWaterFall)
      .fill(0)
      .map((e, i) => i + 1);
    console.log(loading)
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
        {
          loading
            ? <LoadingDots/>
            : <span className="news-status" onClick={this.loadMore}>Load More</span>
        }
      </div>
    );
  }
}


