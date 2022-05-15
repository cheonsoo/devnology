import { getApps } from '@/modules/apps/action';
import { TYPE_GET_APPS } from '@/modules/apps/types';

interface InitialState {
  apps: object;
}

const initialState: InitialState = {
  apps: {},
};

type Action = ReturnType<typeof getApps>;
const appsReducer = (prevState = initialState, action: Action) => {
  switch (action.type) {
    case TYPE_GET_APPS:
      return { apps: action.payload };
    default:
      return prevState;
  }
};

export default appsReducer;
