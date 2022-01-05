import React from 'react';

const SimpleTimelineChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: `${window.screen.availHeight - 300}px` }}>
      <iframe style={{ width: "100%", height: "100%" }} src="/pages/simpleTimelineChart/index.html"></iframe>
    </div>
  );
};

export default SimpleTimelineChart;
