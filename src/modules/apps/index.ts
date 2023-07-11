import axios from 'axios';
import { TYPE_GET_POSTS } from '@/modules/posts/types';

// const TYPE_GET_POSTS: string = 'GET_POSTS';
const DECREMENT_COUNTER: string = 'DECREMENT_COUNTER';

interface GetPostsAction {
  type: typeof TYPE_GET_POSTS;
  payload: object;
}

interface DecrementAction {
  type: typeof DECREMENT_COUNTER;
}

interface InitialState {
  apps: object;
}

const initialState: InitialState = {
  apps: {}
};

export const getPosts = () => {
  return (dispatch: any) => {
    getPostsData().then((data) => {
      dispatch({ type: TYPE_GET_POSTS, payload: data });
    });
  };
};
export const decrease = (): DecrementAction => ({ type: DECREMENT_COUNTER });

function getPostsData() {
  const url = 'http://static.devnology.co.kr/files/config/apps.json';
  return axios({
    url,
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
    .then((res) => res.data)
    .then((data) => data);
}
