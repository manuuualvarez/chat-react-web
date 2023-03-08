import React, { useCallback, useState } from 'react'
import { fetchWithToken, fetchWithoutToken } from '../helpers/fetch';

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
//? MARK: - Login
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
//? MARK: - SignUp
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
        return true
      }
      return resp.msg;
    }
//? MARK: - Verify Token    
    const verifyToken = useCallback( async () => {
      const token = localStorage.getItem('token');
      // Token does not exist
      if(!token) {
       setAuth({
          uid: null,
          checking: false,
          logged: false,
          name: null,
          email: null,
        })
        return false;
      }
      //! Token exists and is Valid?
      const resp = await fetchWithToken('auth/refresh');
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
        return true;

      } else {
        setAuth({
          uid: null,
          checking: false,
          logged: false,
          name: null,
          email: null,
        })
        return false;
      }
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
