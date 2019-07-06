import React from "react";
import { TopNewsProps } from '../container/TopNewsContainer';
import LoadingDots from './LoadingDots';
import NewsGrid from './NewsGrid';

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
    const { loading, newsArr, endOfNews } = this.props;
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
                <NewsGrid key={news.url} news={news} />
              ) : null;
            })}
          </div>
        ))}
        { !endOfNews &&
          (
            loading
              ? <LoadingDots/>
              : <span className="news-status" onClick={this.loadMore}>Load More</span>
          )
        }
      </div>
    );
  }
}


