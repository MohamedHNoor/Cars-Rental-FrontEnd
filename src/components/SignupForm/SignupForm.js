import React from 'react';
import SideBar from "../SideBar/Sidebar";
import './Signupform.css';

function SignupForm(props) {
  return (
<form className='form'>
    <br/>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <br/>
  <br/>
  <button type="submit" className="btn btn-success">Sign Up</button>
</form>

  );
}

export default SignupForm;