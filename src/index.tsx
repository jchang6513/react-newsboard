import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import store from './reducers/store';
import TopNewsContainer from './container/NewsContainer';
import HeaderContainer from './container/HeaderContainer';
import FooterContainer from './container/FooterContainer';

import "./styles.scss";

const App = () => {
  return (
    <div id="App">
      <Provider store={store}>
        <HeaderContainer />
        <TopNewsContainer />
        <FooterContainer />
      </Provider>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
