import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import ScrollMeter from 'scrollmeter';

import AppRoutes from '@/router/routes';
import Header from '@/components/layouts/header';
import SubHeader from '@/components/layouts/subHeader';
// import ScrollMeterJS from '@/components/layouts/scrollProgress/scrollmeter-js';
import Footer from '@/components/layouts/footer';

const StyledContentArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // min-height: ${window.screen.availHeight - 300}px;

  > div {
    width: 1200px;
    max-width: 1200px;
  }
`;

const StyledSuspense = styled.div`
  width: 100%;
  // height: 500px;
  color: #000000;
  font-size: 50px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout: React.FC = () => {
  /*
  // Test
  useEffect(() => {
    const options = {
      direction: 'right',
      leftColor: 'rgba(60, 112, 150, 0.9)',
      rightColor: 'rgba(0, 0, 0, 0.8)',
    };
    const scrollMeterDiv = document.querySelector('#scrollmeter-div');
    new ScrollMeterJS(scrollMeterDiv, options);
  }, []);
  */

  return (
    <BrowserRouter>
      <Header />
      <SubHeader />
      <ScrollMeter height={10} top={50} duration={10} />
      {/* <div id='scrollmeter-div' /> */}

      <StyledContentArea>
        {/* <div> */}
        <Suspense fallback={<StyledSuspense>Loading...</StyledSuspense>}>
          <AppRoutes />
        </Suspense>
        {/* </div> */}
      </StyledContentArea>

      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
