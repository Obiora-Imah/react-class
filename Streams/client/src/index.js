import React from "react"
import ReactDom from "react-dom"
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App"
import reducers from "./reducers";

// configure redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk)) // redux dev tools init
);
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector("#root")
)