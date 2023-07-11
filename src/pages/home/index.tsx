import React, { useEffect, useRef } from 'react';

import Image1 from '@/static/img/night-sky.jpg';
import Image2 from '@/static/img/field.jpg';
import Image3 from '@/static/img/church.jpg';

import './style.scss';

const Home: React.FC = () => {
  const imageRef1 = useRef<HTMLImageElement>(null);
  const imageRef2 = useRef<HTMLImageElement>(null);
  const imageRef3 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    handleScrollImage();
  }, []);

  const handleScrollImage = () => {
    const img1 = imageRef1.current.querySelector('img');
    const img2 = imageRef2.current.querySelector('img');
    const img3 = imageRef3.current.querySelector('img');
    const clientWidth = document.documentElement.clientWidth || document.body.clientWidth;

    img2.style.left = `${clientWidth}px`;

    window.addEventListener('scroll', () => {
      const scrollPoz = window.pageYOffset || document.documentElement.scrollTop;
      const valueForHeader = scrollPoz / clientWidth + 1;
      const valueForFooter = 2.5 - valueForHeader > 1 ? 2.5 - valueForHeader : 1;

      if (imageRef1.current) {
        if (img1) img1.style.transform = `scale(${valueForHeader})`;
      }

      if (imageRef2.current) {
        if (img2) img2.style.left = clientWidth - clientWidth * (getVerticalScrollRatio() / 100) + 'px';
      }

      if (imageRef3.current) {
        if (img3) img3.style.transform = `scale(${valueForFooter})`;
      }
    });
  };

  const getVerticalScrollRatio = () => {
    const h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

    const percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    return percent;
  };

  return (
    <div className="home_container">
      <div className="banner_img" ref={imageRef1}>
        <img alt="test" src={Image1} />
        <div id="header-text" className="header_text">
          DEVNOLOGY
        </div>
      </div>

      <div className="text">얕은 지식 집합소</div>

      <div className="text">심심해서 만듬</div>

      <div className="banner_img" ref={imageRef2}>
        <img alt="test" className="imgHorizontalMove" src={Image2} />
      </div>

      <div className="text">한번 둘러보실라우?</div>

      <div className="text">ㄱ ㄱ ㄱ</div>

      <div className="banner_img" ref={imageRef3}>
        <img alt="test" src={Image3} />
      </div>
    </div>
  );
};

export default Home;
