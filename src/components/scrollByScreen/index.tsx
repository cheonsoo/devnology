import React from 'react';

const ZoomImageScroll: React.FC = () => {
  return (
    <div style={{ width: "100%", height: `${window.screen.availHeight - 300}px` }}>
      <iframe style={{ width: "100%", height: "100%" }} src="/pages/scrollByScreen/combined/index.html"></iframe>
    </div>
  );
};

export default ZoomImageScroll;
