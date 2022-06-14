import axios from 'axios';
import { TYPE_GET_POSTS, TypeAction } from '@/modules/posts/types';
import React from 'react';

export const getPosts: any = () => {
  return (dispatch: React.Dispatch<TypeAction>) => {
    getPostsData().then((data) => {
      dispatch({ type: TYPE_GET_POSTS, payload: data });
    });
  };
};

function getPostsData() {
  const url = 'http://static.devnology.co.kr/files/config/posts.json';
  return axios({
    url,
    method: 'GET',
    headers: {
      contentType: 'application/json',
    },
  })
    .then((res) => res.data)
    .then((data) => data);
}
