import axios from 'axios';
import { TYPE_GET_POSTS, TYPE_GET_POST, TypeAction } from '@/modules/posts/types';
import React from 'react';

export const getPosts: any = () => {
  return (dispatch: React.Dispatch<TypeAction>) => {
    getPostList().then((data) => {
      dispatch({ type: TYPE_GET_POSTS, payload: data });
    });
  };
};

export const getPost2: any = (path: string) => {
  return (dispatch: React.Dispatch<TypeAction>) => {
    getPostContent(path).then((data) => {
      dispatch({ type: TYPE_GET_POST, payload: data });
    });
  };
};

function getPostList() {
  const url = `${process.env.REACT_APP_S3_BUCKET_STATIC}/files/config/posts.json`;
  // const url = 'http://static.devnology.co.kr/files/config/posts.json';
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

export function getPostContent(path: string) {
  const url = `${process.env.REACT_APP_S3_BUCKET_STATIC}/files/posts${path}`;
  // const url = `http://static.devnology.co.kr/files/posts${path}`;
  return axios({
    url,
    method: 'GET',
  })
    .then((res) => res.data)
    .then((data) => data);
}
