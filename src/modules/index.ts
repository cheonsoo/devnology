import { combineReducers } from 'redux';
import { counter } from '@/modules/counter';
import postsReducer from '@/modules/posts/reducer';
import appsReducer from '@/modules/apps/reducer';

const rootReducer = combineReducers({
  counter,
  posts: postsReducer,
  apps: appsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
