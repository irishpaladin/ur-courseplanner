import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import leftImage from "../assets/icon.png";
import rightImage from "../assets/homepage-image.png";

const WelcomePage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (!isAuthenticated && (
    <div className="app-container welcome-page">
      <div className="content">
        <div className="left-section">
          <img src={leftImage} alt="Top Left Image" className="top-left-image" />
          <h1 className="title"><b>Easy Planning</b></h1>
          <p className="description">
            Simplify your academic journey with our intuitive tools. Plan your schedule effortlessly and stay organized throughout your educational adventure. Let's make planning fun!"
          </p>
          <button className="get-started-button" onClick={() => loginWithRedirect()}>
            <p>GET STARTED</p>
          </button>
          <p className="already-account-text">
            Already have an account? <span className="sign-in-text" onClick={() => loginWithRedirect()}>Sign In</span>
          </p>
        </div>
        <div className="right-section">
          <img src={rightImage} alt="Right Side Image" className="right-side-image" />
        </div>
      </div>
    </div>
  ));
}

export default WelcomePage;
