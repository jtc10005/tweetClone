import Post from '../models/post';

export enum ActionTypes {
  ADD_POST = '[posts] ADD_POST',
  DELETE_POST = '[posts] DELETE_POST'
}

export interface AddPostAction {
  type: ActionTypes.ADD_POST;
  payload: Post;
}
export interface DeletePostAction {
  type: ActionTypes.DELETE_POST;
  payload: { postId: string };
}
export function addPost(postToAdd: Post): AddPostAction {
  return {
    type: ActionTypes.ADD_POST,
    payload: postToAdd
  };
}

export function deletePost(id: string): DeletePostAction {
  return {
    type: ActionTypes.DELETE_POST,
    payload: { postId: id }
  };
}
export type Action = AddPostAction | DeletePostAction;
