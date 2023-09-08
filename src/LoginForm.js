import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className='login-form'>
      <h3 className='login-heading'>Log In</h3>
      <form>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input type='text' id='username' name='username' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password' />
        </div>
        <button className='btn' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
