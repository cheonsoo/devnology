import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getApps } from '@/modules/apps/action';
import { RootState } from '@/modules';
import { TypeApps } from '@/types';

const ListContainer = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;

  li {
    width: 85%;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    border: 1px solid gray;
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
    padding: 10px 20px;

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
    }

    > div:nth-child(1) {
      font-weight: 900;
      margin-bottom: 10px;
    }
    > div:nth-child(1) {
    }
  }
`;

const Apps: React.FC = () => {
  const apps: TypeApps = useSelector((state: RootState) => state.apps.list);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getAppsData = useCallback(() => dispatch(getApps()), [dispatch]);

  useEffect(() => {
    getAppsData();
  }, []);

  const handleClickItem = (key: string) => {
    navigate(`/app/${key}`);
  };

  return (
    <div>
      <ListContainer>
        {Object.keys(apps).map(
          (key: string, idx: number) =>
            apps[key].publish && (
              <li key={idx} onClick={() => handleClickItem(key)}>
                <div>{apps[key].title}</div>
                <div>{apps[key].desc}</div>
              </li>
            )
        )}
      </ListContainer>
    </div>
  );
};

export default Apps;
