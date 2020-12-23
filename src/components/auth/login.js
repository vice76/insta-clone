import React from "react";
import InputField from "../shared/inputfield";
import logo from "../../assests/insta-tag.png";
import Button from "@material-ui/core/Button";
import fb from "../../assests/facebook.png";
import googleplay from "../../assests/googleplay.png";
import appstore from "../../assests/appstore.png";

const Login = () => {
  return (
    <div className="Login">
      <div className="Login-header">
        <div className="logo">
          <img src={logo} width="150px" height="51px"></img>
        </div>
        <div className="Login-form">
          <InputField
            type="text"
            placeholder="Phone number, username, or email"
          ></InputField>
          <InputField type="password" placeholder="Password"></InputField>
          <Button variant="contained" disableElevation>
            Log In
          </Button>
        </div>
        <div className="or">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
        </div>
        <div className="dif">
          <div className="fb">
            <img src={fb} alt="facebook"></img>
            <p>Log in with Facebook</p>
          </div>
          <div className="forgot">
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
      <div className="signup">
        <span>Don't have an account?</span>
        <a href="#">Sign up</a>
      </div>
      <div className="apps">
        <p>Get the app.</p>
        <div className="icon-images">
          <a href="#">
            <img src={appstore} alt="appstore"></img>
          </a>
          <a href="#">
            <img src={googleplay} alt="googleplay"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
