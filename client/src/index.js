import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store from "./store/index";
import { loadSimpsons, getSeasons } from "./actions/index";

store.dispatch(loadSimpsons());
store.dispatch(getSeasons());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
);

serviceWorker.unregister();

/* window.store = store;
window.loadSimpsons = loadSimpsons;
window.findEpisode = findEpisode;
store.subscribe(() => console.log("subscribed"));
store.dispatch(loadSimpsons());
store.dispatch(findEpisode()); */