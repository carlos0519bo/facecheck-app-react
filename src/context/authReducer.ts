import { AUTHENTICATED, LOGOUT } from './authAction';
import { ActionAuth } from '../interfaces/user';

export const initialState = {
  username: '',
  token: '',
};

export const authReducer = (state = initialState, action: ActionAuth) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...action.payload,
      };
    case LOGOUT:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
