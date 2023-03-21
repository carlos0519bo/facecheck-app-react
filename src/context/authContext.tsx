import { createContext, useReducer, ReactNode } from 'react';
import { ActionAuth, Auth } from '../interfaces/user';
import { authReducer, initialState } from './authReducer';

const init = () => {
  const hasData = localStorage.getItem('user');
  if (hasData === null) {
    return initialState;
  }

  return JSON.parse(hasData);
};

type Props = {
  children: ReactNode;
};

type ContextDispatch = (action: ActionAuth) => void;

type Context = { auth: Auth };

export const MyContexAuth = createContext<Context>({
  auth: {
    username: '',
    token: '',
  },
});

export const MyContextDispatch = createContext<ContextDispatch>(() => {});


export const AuthContext = ({children}:Props) => {
    const [auth, dispatch] = useReducer(authReducer, initialState, init);

    return (
        <MyContextDispatch.Provider value={dispatch}>
            <MyContexAuth.Provider value={{auth}}>
                {children}
            </MyContexAuth.Provider>
        </MyContextDispatch.Provider>
    )
}