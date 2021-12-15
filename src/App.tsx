import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from '@/components/Home';
// import About from '@/components/About';
// import Counter from '@/components/Counter';

// const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './components/Home'));
const Home = React.lazy(() => import('./components/Home'));
const Counter = React.lazy(() => import('./components/Counter'));
const About = React.lazy(() => import('./components/About'));

import '@/App.css';
import user from '@/static/img/user.png';
import logo from '@/static/img/logo.svg';

const App: React.FC = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <img style={{ width: "100px", height: "100px" }} src={user} />
        <img style={{ width: "100px", height: "100px" }} src={logo} />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="counter" element={<Counter />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
