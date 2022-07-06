import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

const StyledDiv = styled.div`
  height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10000;
  backdrop-filter: brightness(0.8);
`;

const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;

  li {
    margin-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #d9d9d9;
      text-decoration: none;
      font-size: 20px;
      font-weight: 900;
    }

    a:hover {
      color: rgba(57, 150, 250, 0.8);
    }
  }
`;

const menus = [
  { path: '/', label: 'devnology' },
  { path: '/posts', label: 'posts' },
  { path: '/apps', label: 'apps' },
  // { path: '/experiments', label: 'experiments' },
  { path: '/about', label: 'about' }
  // { path: '/zoomimagescroll', label: 'zoomimagescroll' },
  // { path: '/scrollbyscreen', label: 'scrollbyscreen' },
  // { path: '/timeline', label: 'timeline' }
  // { path: '/test', label: 'test' }
];

const SubHeader: React.FC = () => {
  useEffect(() => {
    console.log(moment().format('YYYY-MM-DD HH:MM:SS'));
  }, []);

  return (
    <StyledDiv>
      <StyledUl>
        {menus.map((item, idx) => (
          <li key={idx}>
            <Link to={item.path}>
              {item.label.toUpperCase()}
              {idx < menus.length - 1 ? ' | ' : ''}
            </Link>
          </li>
        ))}
      </StyledUl>
    </StyledDiv>
  );
};

export default SubHeader;
