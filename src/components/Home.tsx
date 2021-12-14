import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (<div>
    Home<br />
    <Link to="/">home</Link><br />
    <Link to="/counter">counter</Link><br />
    <Link to="/about">about</Link>
  </div>);
};

export default Home;