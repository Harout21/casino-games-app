import {applyMiddleware, createStore} from 'redux';
import rootReducer from "./components/redux/rootReducer";
import thunk from "redux-thunk";


export const store = createStore(rootReducer, applyMiddleware(thunk));