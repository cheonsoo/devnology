import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 50px;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10000;
`;

const StyledSpan = styled.span`
  min-width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d9d9d9;
  font-weight: 500;
  margin: 0 20px;
`;

const StyledHeader = styled.div`
  color: #000;
  font-weight: 900;
  font-size: 20px;
  padding-left: 20px;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubHeader:React.FC = () => {

  return (
    <StyledDiv>
      <StyledSpan><Link style={{ color: "#d9d9d9", textDecoration: "none", fontWeight: "900", fontSize: "22px" }} to="/">DEVNOLOGY</Link></StyledSpan>
      <StyledSpan><Link style={{ color: "#d9d9d9", textDecoration: "none", fontWeight: "900", fontSize: "22px" }} to="/counter">COUNTER</Link></StyledSpan>
      <StyledSpan><Link style={{ color: "#d9d9d9", textDecoration: "none", fontWeight: "900", fontSize: "22px" }} to="/about">ABOUT</Link></StyledSpan>
      <StyledSpan><Link style={{ color: "#d9d9d9", textDecoration: "none", fontWeight: "900", fontSize: "22px" }} to="/zoomimagescroll">ZOOMIMAGESCROLL</Link></StyledSpan>
    </StyledDiv>
  );
};

export default SubHeader;
