import React from "react";
import { TopNewsProps } from '../container/NewsContainer';
import LoadingDots from './LoadingDots';
import NewsGrid from './NewsGrid';

export default class TopNews extends React.Component<TopNewsProps, {}> {
  constructor(props: TopNewsProps) {
    super(props);
  }
  componentDidMount() {
    const { page, loadMoreNews: loadNews } = this.props;
    loadNews(page);
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  isBottom(el: HTMLElement) {
    return el.getBoundingClientRect().bottom <= window.innerHeight + 50;
  }

  trackScrolling = () => {
    const { loading, endOfNews } = this.props;
    const wrappedElement = (document.getElementById('App') as HTMLElement);
    if (!loading && !endOfNews && this.isBottom(wrappedElement)) {
      this.loadMore()
    }
  };

  loadMore = () => {
    const { page, loadMoreNews } = this.props;
    loadMoreNews(page+1);
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
            loading && <LoadingDots/>
          )
        }
      </div>
    );
  }
}


