import { getApps } from '@/modules/apps/action';
import { TYPE_GET_APPS } from '@/modules/apps/types';

interface InitialState {
  list: object;
}

const initialState: InitialState = {
  list: {},
};

type Action = ReturnType<typeof getApps>;
const appsReducer = (prevState = initialState, action: Action) => {
  switch (action.type) {
    case TYPE_GET_APPS:
      return { list: action.payload };
    default:
      return prevState;
  }
};

export default appsReducer;
