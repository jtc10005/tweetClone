import * as postReducer from './post'
import { combineReducers } from 'redux';

export interface State {
  posts: postReducer.State
}

export const initialState:State = {
  posts: postReducer.initialState
};

export const reducer = combineReducers<State>({posts:postReducer.reducer})

// function rootReducer(state = initialState, action: any) {
//   return state;
// }
// export default rootReducer;

// import { combineReducers } from 'redux'
// import todos from './todos'
// import NewPost from './newPost'

// const combinedReducers = combineReducers({ todos, NewPost } as any);

// export default combinedReducers;