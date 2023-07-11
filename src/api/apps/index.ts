import axios from 'axios';
import { IApps, TypeApps } from '@/types';
/**
 *
 * @param path
 * @returns string
 */
export const getApp = (path: string = ''): Promise<IApps[]> => {
  const url = `${process.env.REACT_APP_S3_BUCKET_STATIC}/files/config/apps.json?v=${new Date().getTime()}`;
  return axios({
    url,
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  }).then((res) => res.data);
};
