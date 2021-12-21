import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SScrollDiv = styled.div`
  width: 100%;
  height: 3px;
  background: rgba(0,0,0,0.8);
  position: sticky;
  top: 50px;
  z-index: 2;
`;

const ScrollProgress: React.FC = () => {
  const scrollDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const windowHeight = window.screen.availHeight;
      const poz = window.pageYOffset;
      let ratio = poz / windowHeight * 100;
          ratio = ratio >= 98 ? 100 : ratio;

      if (scrollDiv.current)
        scrollDiv.current.style.background = `linear-gradient(to right, #3C5596 ${ratio}%, rgba(0, 0, 0, 0.8) ${ratio}% ${100 - ratio}%)`;
    });
  }, []);

  return (<SScrollDiv ref={scrollDiv} />);
};

export default ScrollProgress;
