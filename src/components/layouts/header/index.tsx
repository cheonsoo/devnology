import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 50px;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
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
  color: #d9d9d9;
  font-weight: 900;
  font-size: 25px;
  padding-left: 20px;
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header:React.FC = () => {
  return (<StyledDiv>
    <StyledHeader>세상의 모든 얕은 지식</StyledHeader>
  </StyledDiv>);
};

export default Header;
