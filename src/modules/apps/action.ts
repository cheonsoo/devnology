import axios from 'axios';
import { TYPE_GET_APPS, TypeAction } from '@/modules/apps/types';
import React from 'react';

export const getApps: any = () => {
  return (dispatch: React.Dispatch<TypeAction>) => {
    getAppsData().then((data) => {
      dispatch({ type: TYPE_GET_APPS, payload: data });
    });
  };
};

function getAppsData() {
  const url = 'http://static.devnology.co.kr/files/config/apps.json';
  return axios({
    url,
    method: 'GET',
    headers: {
      contentType: 'application/json',
    },
  }).then((res) => res.data);
}
