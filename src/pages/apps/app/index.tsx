import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getApps } from '@/modules/apps/action';
import { isEmpty } from 'lodash';
import { getApp } from '@/api/apps';
import { IApps, TypeApps } from '@/types';

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
  const [content, setContent] = useState('');
  const [appInfo, setAppInfo] = useState<IApps>({ id: '', publish: false, path: '', desc: '', title: '', type: '' });

  const dispatch = useDispatch();
  const getAppsData = useCallback(() => dispatch(getApps()), [dispatch]);

  const apps: TypeApps = useSelector((state: RootStateOrAny) => state.apps.list);

  const params = useParams();

  useEffect(() => {
    console.log('### id', params.id);
  }, []);

  useEffect(() => {
    console.log('### TEST');
    // Store 에 App 리스트가 없을 때 Direct 로 진입한 경우
    if (isEmpty(apps)) {
      console.log('getting apps data ...');
      getAppsData();
    }

    if (!isEmpty(apps) && params.id) {
      getApp(params.id)
        .then((data: IApps[]) => {
          console.log('### apps', data);
          return data.find((app) => app.id === params.id);
        })
        .then((data: IApps) => {
          console.log('### data: ', data);
          console.log('### data: ', data.path);
          // setContent(data.path);
          setAppInfo(data);
        });
    }
  }, [apps]);

  return <SDiv>{<SIFrame src={appInfo.path}></SIFrame>}</SDiv>;
};

export default App;
