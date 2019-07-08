import React from 'react';
import { News } from '../data/News';
import moment, { Moment } from 'moment';

interface NewsGridProps {
  news: News;
}

const NewsGrid = (props: NewsGridProps) => {
  const { news } = props;
  const dayDiff = moment().diff((news.publishedAt as Moment), "day");
  const hourDiff = moment().diff((news.publishedAt as Moment), "hour");
  const timeDiff = dayDiff > 0
    ? `${dayDiff} Days Ago`
    : hourDiff > 0
      ? `${hourDiff} Hours Ago`
      : `Now`
  return (
    <a href={news.url}>
      <div className="news-grid">
        <div className="news-img" style={{backgroundImage: `url(${news.urlToImage})`}} />
        <div className="news-content">
          <p className="news-title">
            {news.title}
          </p>
          <div className="news-caption">
            <span>{news.sourceName}</span>
            <span>{timeDiff}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewsGrid;
