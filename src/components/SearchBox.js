import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';

export const SearchBox = () => {

    const { auth, logout } = useContext(AuthContext);


  return (
    <>
        {/* <!-- Searchbox --> */}
        <div className="headind_srch">
            <div className="recent_heading mt-2">
                <h4>{ auth.name }</h4>
                <p> { auth.email } </p>
            </div>
            <div className="srch_bar">
                <div className="stylish-input-group">
                    <button 
                        className="btn text-danger"
                        onClick={ logout }
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
        {/* <!-- Searchbox Fin --> */}
    </>
  )
}
