import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import leftImage from "../assets/icon.png";
import rightImage from "../assets/homepage-image.png";

const WelcomePage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return !isAuthenticated && (
    <div className="app-container welcome-page">
      <div className="main-content">
        <img src={leftImage} alt="Top Left Image" className="top-left-image" style={{width: "50%", marginRight: "20%"}}/>
        <div className="maindescription">
        <h1 className="title" style={{fontSize: "80px"}}><b>Easy Planning</b></h1>
        <p className="description" style={{marginTop: '20px', textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan. lacus vel facilisis.</p>
          <button className="get-started-button" onClick={() => loginWithRedirect()}>
            GET STARTED
          </button>
          <p className="already-account-text">
            Already have an account? <span className="sign-in-text" onClick={() => loginWithRedirect()} style={{color: 'blue', cursor: 'pointer'}}>Sign In</span>
          </p>
        </div>
      </div>
      <div className="right-section">
        <img src={rightImage} alt="Right Side Image" className="right-side-image" />
      </div>
    </div>
  );
}

export default WelcomePage;
