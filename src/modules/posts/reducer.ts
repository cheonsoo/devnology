import { getPosts } from '@/modules/posts/action';
import { TYPE_GET_POSTS } from '@/modules/posts/types';

interface InitialState {
  list: object;
}

const initialState: InitialState = {
  list: {},
};

type Action = ReturnType<typeof getPosts>;
const postsReducer = (prevState = initialState, action: Action) => {
  switch (action.type) {
    case TYPE_GET_POSTS:
      return { list: action.payload };
    default:
      return prevState;
  }
};

export default postsReducer;
