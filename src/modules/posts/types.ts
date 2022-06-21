import { getPostsAction } from '@/modules/posts/action';

export const TYPE_GET_POSTS: string = 'GET_POSTS';
export const TYPE_GET_POST: string = 'GET_POST';

export type TAction = ReturnType<typeof getPostsAction>;
