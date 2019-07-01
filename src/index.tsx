import * as React from "react";
import { render } from "react-dom";
import { getNews, GetNewsCallbacks } from "./actions";
import { NewsType } from "./NewsFactory";

import "./styles.scss";

interface AppStates {
  currentPage: number;
  newsArr: NewsType[];
}
export default class App extends React.Component<{}, AppStates> {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      newsArr: []
    };
  }
  componentDidMount() {
    const { currentPage } = this.state;
    const callbacks: GetNewsCallbacks = {
      onSuccess: (newsArr: NewsType[]) => {
        this.setState({ newsArr });
      },
      onError: err => {
        console.log(err);
      }
    };
    getNews(currentPage, callbacks);
    document.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const { currentPage } = this.state;
    const isBottom =
      document.getElementById("App").getBoundingClientRect().bottom <=
      window.innerHeight;
    if (isBottom) {
      const callbacks: GetNewsCallbacks = {
        onSuccess: (newsArr: NewsType[]) => {
          const { newsArr: prevNews } = this.state;
          this.setState({ newsArr: prevNews.concat(newsArr) });
        },
        onError: err => {
          console.log(err);
        }
      };
      getNews(currentPage + 1, callbacks);
      this.setState({
        currentPage: currentPage + 1
      });
    }
  };
  render(): JSX.Element {
    const { newsArr } = this.state;

    return (
      <div id="App" onScroll={el => console.log("?")}>
        {newsArr.map(news => (
          <div className="news-grid" key={news.url}>
            <img src={news.urlToImage} alt="" />
            <p className="news-title">{news.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
