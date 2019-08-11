import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import store from './reducers/store';
import Header from './components/Header';
import TopNews from './components/News';
import Footer from './components/Footer';

import "./styles.scss";


const App = () => {
  return (
    <div id="App">
      <Provider store={store}>
        <Header />
        <TopNews />
        <Footer />
      </Provider>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
