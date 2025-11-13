import './Homepage.css';
import { useNavigate } from 'react-router'

export function HomePage() {
  var navigate = useNavigate();

  function handleGetStarted() {
    navigate('/chatbot');
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">M.W.I.S.E</div>
        <div className="right-section"></div>
      </div>

      <div className="main-content">
        <div className="leftside">
          <h1>Welcome to M.W.I.S.E</h1>
          <p>Your Mental Wellness Intelligent Support Engine</p>
          <button onClick={handleGetStarted} className="get-started-button">Get Started</button>
        </div>
        <div className="rightside">

          <h2>REGISTER</h2>
          <form action="">
            <div className="name">
              <label for="fname"></label>
              <input type="text" id="fname" name="fname" placeholder="Your first name.." />
            </div>
            <div className="email">
              <label for="email"></label>
              <input type="email" id="email" name="email" placeholder="Your email.." />
            </div>
            <button className="login-btn">Next</button>
            <div className="other-options">
              <button className="other-btn">SIGN IN</button>
              <button className="other-btn">SIGN UP</button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}