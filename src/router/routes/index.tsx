import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/home'));
const Experiments = React.lazy(() => import('@/pages/experiments'));
const Experiment = React.lazy(() => import('@/pages/experiments/experiment'));
const Posts = React.lazy(() => import('@/pages/posts'));
const Post = React.lazy(() => import('@/pages/posts/post'));
const About = React.lazy(() => import('@/pages/about'));

const AppRoutes:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="experiments" element={<Experiments />} />
      <Route path="experiment/*">
        <Route path=":id" element={<Experiment />} />
      </Route>
      <Route path="posts" element={<Posts />} />
      <Route path="post/*">
        <Route path=":id" element={<Post />} />
      </Route>
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
