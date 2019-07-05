import React from "react";

// import "./styles.scss";
import { News } from '../data/News';

interface AppProps {

}
interface AppStates {
  currentPage: number;
  newsArr: News[];
}
export default class TopNewsContainer extends React.Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      currentPage: 1,
      newsArr: []
    };
  }
  // componentDidMount() {
  //   const { currentPage } = this.state;
  //   const callbacks: GetNewsCallbacks = {
  //     onSuccess: (newsArr: News[]) => {
  //       this.setState({ newsArr });
  //     },
  //     onError: err => {
  //       console.log(err);
  //     }
  //   };
  //   getNews(currentPage, callbacks);
  //   document.addEventListener("scroll", this.handleScroll);
  // }
  // handleScroll = () => {
  //   const { currentPage } = this.state;
  //   const isBottom =
  //     (document.getElementById("App") as any).getBoundingClientRect().bottom <=
  //     window.innerHeight;
  //   if (isBottom) {
  //     const callbacks: GetNewsCallbacks = {
  //       onSuccess: (newsArr: News[]) => {
  //         const { newsArr: prevNews } = this.state;
  //         this.setState({ newsArr: prevNews.concat(newsArr) });
  //       },
  //       onError: err => {
  //         console.log(err);
  //       }
  //     };
  //     getNews(currentPage + 1, callbacks);
  //     this.setState({
  //       currentPage: currentPage + 1
  //     });
  //   }
  // };
  render(): JSX.Element {
    const { newsArr } = this.state;
    const noWaterFall = 2;
    const waterFalls = Array(noWaterFall)
      .fill(0)
      .map((e, i) => i + 1);

    return (
      <div id="App" onScroll={el => console.log("?")}>
        <div className="header">
          <p>TOP NEWS</p>
        </div>
        <div className="news-grids">
          {waterFalls.map(waterFall => (
            <div className="waterfall">
              {newsArr.map((news, index) => {
                return index % noWaterFall === waterFall - 1 ? (
                  <div key={news.url} className="news-grid">
                    <a href={news.url}>
                      <img src={news.urlToImage} alt="" />
                      <p className="news-title">{news.title}</p>
                    </a>
                  </div>
                ) : null;
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
