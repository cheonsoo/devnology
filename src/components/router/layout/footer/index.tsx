import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: 500;

  div > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Footer:React.FC = () => {
  return (
    <StyledDiv>
      <div>
        <div>Copyright @2021 Devnology</div>
        <div>mansoo.app@gmail.com</div>
      </div>
    </StyledDiv>
  );
};

export default Footer;