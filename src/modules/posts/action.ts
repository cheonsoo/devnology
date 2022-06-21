import React from 'react';
import { createAction } from 'redux-actions';
import { TYPE_GET_POSTS, TYPE_GET_POST, TAction } from '@/modules/posts/types';
import { getPosts, getPost } from '@/api/posts';

// export const getPostsAction: any = createAction(TYPE_GET_POSTS, () => {
//   console.log('getPostsAction');
//   // return getPosts().then((data) => data);

//   return (dispatch: React.Dispatch<TAction>) => {
//     getPosts().then((data) => {
//       dispatch(data);
//     });
//   };
// });

export const getPostsAction = createAction(TYPE_GET_POSTS, (): any => {
  return getPosts();
  // return (dispatch: React.Dispatch<TAction>) => {
  //   dispatch([]);
  // };
});

// export const getPostsAction: any = createAction(TYPE_GET_POSTS, () => {
//   return (dispatch: React.Dispatch<TAction>) => {
//     getPosts().then((data) => {
//       dispatch({ type: TYPE_GET_POSTS, payload: data });
//     });
//   };
// });

// export const getPostsAction2 = (): any => async (dispatch: React.Dispatch<TAction>) => {
//   const res = await getPosts();
//   dispatch({ type: TYPE_GET_POSTS, payload: res });
// };

// export const getPost2: any = (path: string) => {
//   return (dispatch: React.Dispatch<TAction>) => {
//     getPost(path).then((data) => {
//       dispatch({ type: TYPE_GET_POST, payload: data });
//     });
//   };
// };
