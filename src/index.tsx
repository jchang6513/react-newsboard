import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import store from './store';
// import TopNewsContainer from './container/TopNewsContainer';

const App = () => {
  console.log(store.getState().TopNews)
  return (
    <Provider store={store}>
      {/* <TopNewsContainer/> */}
    </Provider>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
