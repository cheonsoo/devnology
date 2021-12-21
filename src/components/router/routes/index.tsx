import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('@/components/home'));
const Counter = React.lazy(() => import('@/components/counter'));
const About = React.lazy(() => import('@/components/about'));
const ZoomImageScroll = React.lazy(() => import('@/components/zoomImageScroll'));

const AppRoutes:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="counter" element={<Counter />} />
      <Route path="about" element={<About />} />
      <Route path="zoomimagescroll" element={<ZoomImageScroll />} />
    </Routes>
  );
};

export default AppRoutes;
