import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChatPage } from '../pages/ChatPage'
import { AuthRouter } from './AuthRouter'
import { AuthContext } from '../auth/AuthContext'

 
export const AppRouter = () => {

  const { auth, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken()
  }, [verifyToken])


  if (auth.checking) {
    return <h1> Waiting ... </h1>
  }

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ChatPage />} />
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="*" element={<p>La página no existe.</p>} />
        </Routes>
      </BrowserRouter>
    )
  }
