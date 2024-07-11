// components/Login.jsx
import '../styles/login.css';
import rsslogo from '../assets/rsslogo-orange.png';
import personinCircle from '../assets/person-circle.png';
import userIcon from '../assets/user.svg';
import passwordIcon from '../assets/password.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("Username:", username);
    // console.log("Password:", password);

    if (username === '123' && password === 'Pass@123') {
      console.log("Valid credentials");
      sessionStorage.setItem('isUserLoggedIn', 'true');
      console.log("Session Storage:", sessionStorage.getItem('isUserLoggedIn'));
      navigate('/dashboard');
      console.log("Navigating to dashboard");
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={rsslogo} alt="RSS Logo" />
        <span className='loginlogo-text'>राष्ट्रीय स्वयंसेवक संघ</span>
      </div>
      <div className="outer-loginBox">
        <div className="login-box">
          <div className="login-header">
            <img src={personinCircle} alt="img" />
            <h2>User Login</h2>
          </div>
          <div className="login-form">
            <div className="input-group">
              <span>
                <img src={userIcon} alt="" />
              </span>
              <input
                type="text"
                placeholder="User Name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <span>
                <img src={passwordIcon} alt="" />
              </span>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="loginbtn-container">
              <button className="login-button" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
