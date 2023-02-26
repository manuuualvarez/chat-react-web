import React from 'react'
import { Route, Routes } from "react-router-dom"
import { LoginPage } from '../pages/LoginPage'
import { SignupPage } from '../pages/SignupPage'
import '../css/auth.css'


export const AuthRouter = () => {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-50 p-b-90">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<p>La página no existe</p>} />
            </Routes>
          </div>
        </div>
      </div>
    )
  }
