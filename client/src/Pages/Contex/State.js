// src/Pages/Contex/State.js
import React, { createContext, useContext, useState,useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: '' });
  useEffect(()=>{
    const data=localStorage.getItem('auth')
    if(data){
        const parsData= JSON.parse(data)
        setAuth({
          ...auth,
          user:parsData.user,
          token:parsData.token
        });
    }//eslint-disable-next-line
  },{});
 

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
