import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (<div>
    About<br />
    <Link to="/">home</Link><br />
    <Link to="/counter">counter</Link><br />
    <Link to="/about">about</Link><br />
  </div>);
};

export default About;