import React, { useState } from "react";
import validator from 'validator';
  


function Signup() {

    const [errorMessage, setErrorMessage] = useState('')
  
    const validate = (value) => {
    
      if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage('Is Strong Password')
      } else {
        setErrorMessage('Is Not Strong Password')
      }
    }


        return (
            <form>
                <h3 style={{padding:'0px','margin-top':'45px'}}>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>validate(e.target.value)}/>
                    <span style={{fontWeight:'bold',color:'red'}}>{errorMessage}</span>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
}

export default Signup;