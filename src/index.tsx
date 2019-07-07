import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import store from './reducers/store';
import TopNewsContainer from './container/NewsContainer';

import "./styles.scss";
import HeaderContainer from './container/HeaderContainer';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="App">
      <Provider store={store}>
        <HeaderContainer />
        <TopNewsContainer />
        <Footer />
      </Provider>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
