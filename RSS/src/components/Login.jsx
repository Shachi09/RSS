import '../styles/login.css';
import rsslogo from '../assets/rsslogo-orange.png';
import personinCircle from '../assets/person-circle.png';
import userIcon from '../assets/user.svg';
import passwordIcon from '../assets/password.svg';


function Login() {
  return (
    <>
      <div className="login-container">
        <div className="logo">
          <img src={rsslogo} alt="RSS Logo" />
          <span className='loginlogo-text'>राष्ट्रीय स्वयंसेवक संघ</span>
        </div>
        <div className="outer-loginBox">
        <div className="login-box">
          <div className="login-header">
            {/* <FaUser size={50} /> */}
            <img src={personinCircle} alt="img" />
            <h2>User Login</h2>
          </div>
          <div className="login-form">
            <div className="input-group">
              {/* <FaUser /> */}
              <span>
                <img src={userIcon} alt="" />
              </span>
              <input type="text" placeholder="User Name" />
            </div>
            <div className="input-group">
              {/* <FaLock /> */}
              <span>
                <img src={passwordIcon} alt="" />
              </span>
              <input type="password" placeholder="Password" />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="loginbtn-container">
            <button className="login-button">Login</button>
            </div>
            
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Login;
