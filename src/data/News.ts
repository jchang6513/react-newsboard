import { Moment } from "moment";

export interface News {
  sourceId?: string;
  sourceName?: string;
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: Moment;
  content?: string;
}
