import axios from 'axios';
import { TPost } from '@/types';

/**
 *
 * @returns TPost[]
 */
export const getPosts = (): Promise<TPost[]> => {
  const url: string = `${process.env.REACT_APP_S3_BUCKET_STATIC}/files/config/posts.json`;
  return axios
    .get<TPost[]>(url)
    .then((res) => res.data)
    .then((data) => data);
};

/**
 *
 * @param path
 * @returns string
 */
export const getPost = (path: string = ''): Promise<string> => {
  const url = `${process.env.REACT_APP_S3_BUCKET_STATIC}/files/posts${path}`;
  return axios({
    url,
    method: 'GET'
  })
    .then((res) => res.data)
    .then((data) => data);
};
