import React, { useCallback, useState } from 'react'
import { fetchWithoutToken } from '../helpers/fetch';

const { createContext } = require("react");

export const AuthContext = createContext();


const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
}

//  Provider
export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);

    const login = async (email, password) => {
      const resp = await fetchWithoutToken('auth', { email, password }, 'POST');
      if (resp.ok) {
        localStorage.setItem('token', resp.token);
        const { user } = resp;

        setAuth({
          uid: user.uid,
          checking: false,
          logged: true,
          name: user.name,
          email: user.email,
        })
      }
      return resp.ok;
    }

    const signUp = async (email, password, name) => {
      const resp = await fetchWithoutToken('auth/create', { email, password, name }, 'POST');
      if (resp.ok) {
        localStorage.setItem('token', resp.token);
        const { user } = resp;

        setAuth({
          uid: user.uid,
          checking: false,
          logged: true,
          name: user.name,
          email: user.email,
        })
      }
      return resp.ok;
    }
    
    const verifyToken = useCallback( () => {

    }, [] )

    const logout = () => {

    }

  return (
    <AuthContext.Provider value={{
        auth,
        login,
        signUp,
        verifyToken,
        logout,
    }}>
        { children }
    </AuthContext.Provider>
  )
}
