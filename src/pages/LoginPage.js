import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import Swal from 'sweetalert2'

export const LoginPage = () => {

  const { login } = useContext(AuthContext)

  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberme: false
  });

  const onChange = ({target}) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const toggleRememberme = () => {
    setForm({
      ...form,
      rememberme: !form.rememberme
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    // Remember ME
    if(form.rememberme){
      localStorage.setItem('email', form.email);
    } else {
      localStorage.removeItem('email');
    }
    // HTTP Request
    const { email, password } = form;
    const resp = await login(email, password);
    // Sweet Alert
    if (!resp) {
      Swal.fire('Invalid Credentials', 'please check your email and password', 'error');
    } 
  }

  const fieldAreValid = () => {
    return form.email.length > 3 && form.password.length >= 6;
  }

  // Without depencency to check if the user is remembered
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('email');
    if(rememberedEmail){
      setForm((form) => ({
        ...form,
        email: rememberedEmail,
        rememberme: true
      }))
    }
  }, [])

  return (
      <form 
        className="login100-form validate-form flex-sb flex-w"
        onSubmit={ onSubmit }
      >
        <span className="login100-form-title mb-3">
          Chat - Login
        </span>
        
        <div className="wrap-input100 validate-input mb-3">
          <input 
            className="input100" 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={form.email}
            onChange={ onChange }
          />
          <span className="focus-input100"></span>
        </div>
        
        
        <div className="wrap-input100 validate-input mb-3">
          <input 
            className="input100" 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={form.password}
            onChange={ onChange }
          />
          <span className="focus-input100"></span>
        </div>
        
        <div className="row mb-3">
          <div 
            className="col"
            onClick={ () => toggleRememberme() }
          >
            <input 
              className="input-checkbox100" 
              id="ckb1" 
              type="checkbox" 
              name="rememberme" 
              checked={form.rememberme}
              readOnly
            />
            <label className="label-checkbox100">
              Remember me
            </label>
          </div>

          <div className="col text-right">
            <Link to={'/auth/signup'} className="txt1"> New Account? </Link>
          </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
          <button 
            type="submit"
            className="login100-form-btn"
            disabled={ !fieldAreValid() }
          >
            Sign In
          </button>
        </div>

      </form>
  )
}
