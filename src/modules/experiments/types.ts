import { getPosts } from '@/modules/posts/action';

export const TYPE_GET_POSTS: string = 'GET_POSTS';
export type TypeAction = ReturnType<typeof getPosts>;
