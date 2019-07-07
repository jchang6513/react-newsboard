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
    return (
      <div className="news-grids">
        {newsArr && newsArr.map((news) => (
          <NewsGrid key={news.url} news={news} />
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


