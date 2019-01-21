import * as postReducer from './post'
import { combineReducers } from 'redux';

export interface State {
  posts: postReducer.State
}

export const initialState:State = {
  posts: postReducer.initialState
};

export const reducer = combineReducers<State>({posts:postReducer.reducer})
