import { handleActions } from 'redux-actions';
import { getPostsAction } from '@/modules/posts/action';
import { TYPE_GET_POSTS } from '@/modules/posts/types';

interface InitialState {
  list: object;
}

const initialState: InitialState = {
  list: []
};

type Action = ReturnType<typeof getPostsAction>;

const postsReducer = handleActions(
  {
    [TYPE_GET_POSTS]: (state, action: Action) => {
      console.log('type_get_posts');
      console.log('type_get_posts', action.type);
      console.log('type_get_posts', action.payload);
      return { ...state, list: action.payload };
    }
    // [TYPE_GET_POSTS]: (state, action: Action) => ({ ...state, list: action.payload })
  },
  initialState
);

// const postsReducer = handleActions({
//   [TYPE_GET_POSTS]: (prevState = initialState, action: Action) => ({ ...prevState, list: action.payload })
// });

// const postsReducer = (prevState = initialState, action: Action) => {
//   switch (action.type) {
//     case TYPE_GET_POSTS:
//       return { list: action.payload };
//     default:
//       return prevState;
//   }
// };

export default postsReducer;
