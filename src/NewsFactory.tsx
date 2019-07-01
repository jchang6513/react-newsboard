import moment, { Moment } from "moment";

export interface SourceType {
  id: string;
  name: string;
}

export interface NetNewsType {
  source: SourceType;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsType {
  sourceId: string;
  sourceName: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Moment;
  content: string;
}
export default class NewsFactory {
  static createNewsFromNet(netNews: NetNewsType): NewsType {
    return {
      sourceId: netNews.source.id,
      sourceName: netNews.source.name,
      author: netNews.author,
      title: netNews.title,
      description: netNews.description,
      url: netNews.url,
      urlToImage: netNews.urlToImage,
      publishedAt: moment(netNews.publishedAt),
      content: netNews.content
    };
  }
  static createNewsArrayFromNet(netNewsArr: NetNewsType[]): NewsType[] {
    return netNewsArr.map(netNews => this.createNewsFromNet(netNews));
  }
}
