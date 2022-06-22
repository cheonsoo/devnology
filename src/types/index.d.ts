declare module '*.md';

export type TypeApps = {
  [key: string]: {
    publish: boolean;
    path: string;
    desc: string;
    title: string;
    type: string;
  };
};

export type TPost = {
  id: string;
  publish: boolean;
  path: string;
  desc: string;
  title: string;
  type: string;
  content: string;
};

// export type TypePosts = {
//   [key: string]: {
//     publish: boolean;
//     path: string;
//     desc: string;
//     title: string;
//     type: string;
//   };
// };

export interface IApps {
  publish: boolean;
  path: string;
  desc: string;
  title: string;
  type: string;
}

export interface IPosts {
  publish: boolean;
  path: string;
  desc: string;
  title: string;
  type: string;
}
