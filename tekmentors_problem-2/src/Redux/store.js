import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as CalculatorReducer } from "../Redux/Calculator/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ CalculatorReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
