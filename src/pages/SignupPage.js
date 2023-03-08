import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import Swal from 'sweetalert2'

export const SignupPage = () => {

  const { signUp } = useContext(AuthContext);
  

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChange = ({target}) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    // HTTP Request
    const { email, password, name } = form;
    const resp = await signUp(email, password, name);
    // Sweet Alert
    if (resp !== true) {
      Swal.fire('Something wrong', resp, 'error');
    } 
  }

  const fieldAreValid = () => {
    return form.email.length > 3 && form.password.length >= 6 && form.name.length > 3;
  }

  
  return (
      <form 
        className="login100-form validate-form flex-sb flex-w"
        onSubmit={ onSubmit }
      >
        <span className="login100-form-title mb-3">
          Chat - Sign UP
        </span>

        <div className="wrap-input100 validate-input mb-3">
          <input 
            className="input100" 
            type="text" 
            name="name" 
            placeholder="Full Name"
            value={form.name}
            onChange={ onChange } 
          />
          <span className="focus-input100"></span>
        </div>

        
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
          <div className="col text-right">
            <Link to={'/auth/login'} className="txt1"> Already have an account? </Link>
          </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
          <button 
            type="submit"
            className="login100-form-btn"
            disabled={ !fieldAreValid() }
          >
            Create Account
          </button>
        </div>

      </form>
  )
}
