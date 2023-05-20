import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import App from "./App";
import sidebarReducer from "./redux/sidebar/sidebarReducer";
import searchbarReducer from "./redux/searchbar/searchbarReducer";
import getAnimeReducer from "./redux/getAnime/getAnimeReducer";
import thunk from "redux-thunk";
import { getTopAnimeData } from "./redux/getTopAnime/getTopAnimeActions";
import getTopAnimeReducer from "./redux/getTopAnime/getTopAnimeReducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  searchbar: searchbarReducer,
  getAnime: getAnimeReducer,
  getTopAnime: getTopAnimeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const initialCalls = () => {
  store.dispatch(getTopAnimeData());
};

initialCalls();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
