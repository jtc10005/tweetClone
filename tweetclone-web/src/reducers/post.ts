import Post from '../models/post';
import { ActionTypes, Action } from '../actions/post';

export interface State {
  posts: Post[];
}

export const initialState: State = { posts: [] };

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      const post = action.payload;
      return {
        ...state,
        posts: [...state.posts, post]
      };
    case ActionTypes.DELETE_POST:
      const postId = action.payload.postId;
      return {
        ...state,
        posts: state.posts.filter(p => p.postId != postId)
      };

    default:
      return state;
  }
}

