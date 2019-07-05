interface SourceType {
  id: string;
  name: string;
}

export interface NetNews {
  source: SourceType;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
