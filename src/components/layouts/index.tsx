import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import ScrollMeter from 'scrollmeter';

import AppRoutes from '@/router/routes';
import Header from '@/components/layouts/header';
import SubHeader from '@/components/layouts/subHeader';
import Footer from '@/components/layouts/footer';

const StyledContentArea = styled.div`
  // min-height: ${window.screen.availHeight - 300}px;
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
  return (
    <BrowserRouter>
      <Header />
      <SubHeader />
      <ScrollMeter height={10} top={50} duration={10} />

      <StyledContentArea>
        <Suspense fallback={<StyledSuspense>Loading...</StyledSuspense>}>
          <AppRoutes />
        </Suspense>
      </StyledContentArea>

      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
