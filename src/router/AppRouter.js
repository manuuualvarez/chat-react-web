import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { PublicsRoutes } from './PublicsRoutes'
import { PrivatesRoutes } from './PrivatesRoutes'

 
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
          {/* <Route exact path="/" element={<ChatPage />} /> */}
          <Route
            path="/"
            element={<PrivatesRoutes isAuthenticated={ auth.logged } />}
          />
          {/* <Route path="/auth/*" element={<AuthRouter />} /> */}
          <Route
            path="/auth/*"
            element={<PublicsRoutes isAuthenticated={ auth.logged } />}
          />

          <Route path="*" element={<p>La página no existe.</p>} />
        </Routes>
      </BrowserRouter>
    )
  }
