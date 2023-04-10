import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENISON_COMPOSE__ || compose;

const store = createStore (
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;