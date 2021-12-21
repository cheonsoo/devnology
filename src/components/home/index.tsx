import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Image1 from '@/static/img/night-sky-g1f3262fbb_1920.jpg';
import Image2 from '@/static/img/church-g00bcdbd0a_1920.jpg';

const StyledImageContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: scale(1);
`;

const StyledHeader = styled.div`
  position: absolute;
  top: 300px;
  z-index: 2;
  color: rgba(0, 0, 0, 0.6);
  font-size: 70px;
  font-weight: 900;
`;

const StyledText = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #000;
  font-weight: 900;
`;

const Home: React.FC = () => {
  const imageRef1 = useRef<HTMLImageElement>(null);
  const imageRef2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    handleScrollImage();
  }, []);

  const handleScrollImage = () => {
    const offset = 1000;
    window.addEventListener("scroll", () => {
      const valueForHeader = window.pageYOffset / offset + 1;
      const valueForFooter = (3.5 - valueForHeader) > 1 ? 3.5 - valueForHeader : 1;

      if (imageRef1.current)
        imageRef1.current.style.transform = `scale(${valueForHeader})`;
      if (imageRef2.current)
        imageRef2.current.style.transform = `scale(${valueForFooter})`;
    });
  };

  return (
    <div>
      <StyledImageContainer>
        <StyledImage ref={imageRef1} src={Image1} />
        <StyledHeader>DEVNOLOGY</StyledHeader>
      </StyledImageContainer>

      <StyledText>세상의 모든 얕은 지식</StyledText>

      <StyledText>제 맘대로 모아봤습니다</StyledText>

      <StyledText>시작할까요?</StyledText>

      <StyledImageContainer>
        <StyledImage ref={imageRef2} src={Image2} />
      </StyledImageContainer>
    </div>
  );
};

export default Home;