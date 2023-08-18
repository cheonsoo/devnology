import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import { getApps } from '@/modules/apps/action';
import { RootState } from '@/modules';
import { TypeApps } from '@/types';

import Card from "@/components/organisms/cardSimple";
interface PostProps {
  desc: string;
}

const Dashboard: React.FC = () => {
  const apps: TypeApps = useSelector((state: RootState) => state.apps.list);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getAppsData = useCallback(() => dispatch(getApps()), [dispatch]);

  useEffect(() => {
    getAppsData();
  }, []);

  const handleClickItem = (id: string) => {
    navigate(`/app/${id}`);
  };

  return (
    <div className="home_container">
      <div>
        <div style={{ display: "flex", flexDirection: "row", overflow: "hidden", flexWrap: "wrap" }}>
          {apps
          .filter((app) => app.publish)
          .map((app:any, idx: number) => (
            <Card title={app.title} desc={app.desc} thumbnail={app.thumbnail} created={app.created} />
            // <SLi key={app} onClick={() => handleClickItem(app.id)}>
            //   <div>
            //     <div>{app.title}</div>
            //     <div>{app.desc}</div>
            //   </div>
            // </SLi>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
