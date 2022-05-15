import { getApps } from '@/modules/apps/action';

export const TYPE_GET_APPS: string = 'GET_APPS';
export type TypeAction = ReturnType<typeof getApps>;
