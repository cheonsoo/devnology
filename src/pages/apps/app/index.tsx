import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getApps } from '@/modules/apps/action';
import { isEmpty } from 'lodash';

const SDiv = styled.div`
  width: 100%;
  height: ${window.screen.availHeight - 300}px;
`;

const SIFrame = styled.iframe`
  width: 100%;
  height: 100%;
  background: #fff;
`;

const App: React.FC = () => {
  const [appInfo, setAppInfo] = useState({});

  const dispatch = useDispatch();
  const getAppsData = useCallback(() => dispatch(getApps()), [dispatch]);

  const apps: ObjType = useSelector((state: RootStateOrAny) => state.apps.apps);

  const params = useParams();

  useEffect(() => {
    if (isEmpty(apps)) {
      getAppsData();
    }

    if (!isEmpty(apps) && params.id) {
      setAppInfo(apps[params.id]);
    }
  }, [apps]);

  return <SDiv>{appInfo.path && <SIFrame src={appInfo.path}></SIFrame>}</SDiv>;
};

export default App;
