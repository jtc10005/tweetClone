import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import {State, reducer, initialState} from '../reducers';

const store = createStore<State, any, any, any>(reducer,initialState, applyMiddleware(logger));
export default store;
