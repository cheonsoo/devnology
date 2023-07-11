import React from 'react';
import { Routes, Route } from 'react-router-dom';

// const Home = React.lazy(() => import('@/pages/home'));
const Dashboard = React.lazy(() => import('@/pages/dashboard'));
const Apps = React.lazy(() => import('@/pages/apps'));
const App = React.lazy(() => import('@/pages/apps/app'));
const Posts = React.lazy(() => import('@/pages/posts'));
const Post = React.lazy(() => import('@/pages/posts/post'));
const About = React.lazy(() => import('@/pages/about'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="apps" element={<Apps />} />
      <Route path="app/*">
        <Route path=":id" element={<App />} />
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
