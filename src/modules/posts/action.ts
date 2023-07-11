import { createAction } from 'redux-actions';
import { TYPE_GET_POSTS, TYPE_GET_POST, TAction } from '@/modules/posts/types';
import { getPosts, getPost } from '@/api/posts';
import { Dispatch } from 'redux';

export const getPostsAction = createAction(TYPE_GET_POSTS);
export const getPostAction = createAction(TYPE_GET_POST);

export const getPostsActionImpl: any = () => (dispatch: Dispatch<TAction>) => {
  getPosts().then((data) => dispatch(getPostsAction(data)));
};

export const getPostActionImpl: any = (id: string, path: string) => (dispatch: Dispatch<TAction>) => {
  getPost(path).then((data) => dispatch(getPostAction({ id, data })));
};
