import React from 'react';
import { createAction } from 'redux-actions';
import { TYPE_GET_POSTS, TYPE_GET_POST, TAction } from '@/modules/posts/types';
import { getPosts, getPost } from '@/api/posts';

export const getPostsAction = createAction(TYPE_GET_POSTS);
export const getPostAction = createAction(TYPE_GET_POST);

export const getPostsActionImpl: any = () => (dispatch: React.Dispatch<TAction>) => {
  getPosts().then((data) => dispatch(getPostsAction(data)));
};

export const getPostActionImpl: any = (id: string, path: string) => (dispatch: React.Dispatch<TAction>) => {
  getPost(path).then((data) => dispatch(getPostAction({ id, data })));
};
