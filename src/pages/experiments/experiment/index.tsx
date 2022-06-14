import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { experiments } from '@/constants';

import VisualizedArrayCompare from '@/components/visualizedArrayCompare';

const SDiv = styled.div`
  width: 100%;
  height: ${window.screen.availHeight - 300}px;
`;

const SIFrame = styled.iframe`
  width: 100%;
  height: 100%;
  background: #fff;
`;

const Experiment: React.FC = () => {
  const [type, setType] = useState('');
  const [path, setPath] = useState('');

  const params = useParams();

  useEffect(() => {
    if (params) {
      const id = params.id || '';
      const experiment = experiments[id];
      setType(experiment.type);
      setPath(experiment.path);
    }
  }, []);

  function getIFrame() {
    if (type.toLowerCase() === 's3') {
      return <iframe width="100%" height="100%" src={path}></iframe>;
    } else if (type.toLowerCase() === 'local') {
      return <iframe width="100%" height="100%" src={path}></iframe>;
    } else if (type.toLowerCase() === 'component') {
      // TODO
    }
  }

  function getComponent() {
    const comp = VisualizedArrayCompare;
    return React.createElement(comp, {});
  }

  // return <SDiv>{type === 'component' ? <>{getComponent()}</> : <SIFrame src={path}></SIFrame>}</SDiv>;
  return <div style={{ width: '100%', height: '1000px' }}>{getIFrame()}</div>;
};

export default Experiment;
