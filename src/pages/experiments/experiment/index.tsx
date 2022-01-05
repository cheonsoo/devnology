import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { experiments } from '@/constants';

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
  const [path, setPath] = useState('');

  const params = useParams();

  useEffect(() => {
    if (params) {
      const id = params.id || '';
      const _path = experiments[id].path;
      setPath(_path);
    }
  }, []);

  return (
    <SDiv>
      <SIFrame src={path}></SIFrame>
    </SDiv>
  );
};

export default Experiment;
