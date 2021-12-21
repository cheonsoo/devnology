import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from '@/components/router/routes';
import Header from '@/components/router/layout/header';
import SubHeader from '@/components/router/layout/subHeader';
import ScrollProgress from '@/components/router/layout/scrollProgress';
import Footer from '@/components/router/layout/footer';

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <SubHeader />
      <ScrollProgress />

      <div style={{ paddingTop: "0px", width: '100%', height: '100%' }}>
        <Suspense fallback={<div style={{ width: "100%", height: "height", color: '#000', fontSize: '50px', fontWeight: '900', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
