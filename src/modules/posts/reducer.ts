import { getPosts } from '@/modules/posts/action';
import { TYPE_GET_POSTS } from '@/modules/posts/types';

interface InitialState {
  posts: object;
}

const initialState: InitialState = {
  posts: {},
};

type Action = ReturnType<typeof getPosts>;
const postsReducer = (prevState = initialState, action: Action) => {
  switch (action.type) {
    case TYPE_GET_POSTS:
      return { posts: action.payload };
    default:
      return prevState;
  }
};

export default postsReducer;
