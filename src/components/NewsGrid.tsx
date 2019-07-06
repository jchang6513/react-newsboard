import React from 'react';
import { News } from '../data/News';

interface NewsGridProps {
  news: News;
}

const NewsGrid = (props: NewsGridProps) => {
  const { news } = props;
  return (
    <div className="news-grid">
      <a href={news.url}>
        <img src={news.urlToImage} alt="" />
        <p className="news-title">{news.title}</p>
      </a>
    </div>
  );
};

export default NewsGrid;
