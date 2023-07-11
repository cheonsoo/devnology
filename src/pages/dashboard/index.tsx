import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { getApps } from '@/modules/apps/action';
import { RootState } from '@/modules';
import { TypeApps } from '@/types';

import './style.scss';

const SUl = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
`;

const SLi = styled.li`
  border: 5px solid #eeeeee;
  border-radius: 8px;
  border-radius: 8px;
  width: 250px;
  height: 150px;
  display: flex;
  margin: 15px;
  cursor: pointer;

  > div {
    width: 100%;
    height: 100%;

    > div:nth-child(1) {
      width: 100%;
      height: 40%;
      background-color: #eeeeee;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      color: green;
      font-weight: bolder;
      text-transform: uppercase;
      font-size: 18px;
    }

    > div:nth-child(2) {
      width: 100%;
      height: 60%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      font-size: 18px;
      font-weight: bolder;
      color: #000;
      /* padding: 10px; */
      text-align: center;
    }
  }
`;

const Dashboard: React.FC = () => {
  const apps: TypeApps = useSelector((state: RootState) => state.apps.list);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getAppsData = useCallback(() => dispatch(getApps()), [dispatch]);

  useEffect(() => {
    getAppsData();
  }, []);

  useEffect(() => {
    console.log('### apps');
    console.log(apps);
  }, [apps]);

  const handleClickItem = (id: string) => {
    navigate(`/app/${id}`);
  };

  return (
    <div className="home_container">
      <div>
        <SUl>
          {apps
          .filter((app) => app.publish)
          .map((app:any, idx: number) => (
            <SLi key={app} onClick={() => handleClickItem(app.id)}>
              <div>
                <div>{app.title}</div>
                <div>{app.desc}</div>
              </div>
            </SLi>
          ))}
        </SUl>
      </div>
    </div>
  );
};

export default Dashboard;
