import moment from "moment";
import { News } from 'data/News';
import { NetNews } from 'data/NetNews';

export default class NewsFactory {
  static createNewsFromNet(netNews: NetNews): News {
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
  static createNewsArrayFromNet(netNewsArr: NetNews[]): News[] {
    return netNewsArr.map(netNews => this.createNewsFromNet(netNews));
  }
}
