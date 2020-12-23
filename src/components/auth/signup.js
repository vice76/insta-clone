import React from "react";
import InputField from "../shared/inputfield";
import logo from "../../assests/insta-tag.png";
import Button from "@material-ui/core/Button";
import fb from "../../assests/facebook.png";
import googleplay from "../../assests/googleplay.png";
import appstore from "../../assests/appstore.png";

const Signup = () => {
  return (
    <div className="Signup">
      <div className="Signup-header">
        <div className="logo">
          <img src={logo} width="150px" height="51px"></img>
        </div>
        <div className="content">
        <span>Sign up to see photos and videos </span>
        <p>from your friends.</p>
        </div>
        <Button variant="contained" className="btn" disableElevation style={{textTransform: 'none'}}>
        <div className="dif">
          <div className="fb">
            <img src={fb} alt="facebook"></img>
            <span>Log in with Facebook</span>
          </div>
          </div>
          </Button>
        <div className="or">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
        </div>
        <div className="Signup-form">
          <InputField
            type="text"
            placeholder="Mobile Number or Email"
          ></InputField>
          <InputField type="text" placeholder="Full Name"></InputField>
          <InputField type="text" placeholder="Username"></InputField>
          <InputField type="password" placeholder="Password"></InputField>
          <Button variant="contained" disableElevation style={{textTransform: 'none'}}>
            Signup
          </Button>
        </div>
        <div className="policy">
            <p>By signing up, you agree to our <strong>Terms </strong> , <strong>Data</strong></p>
            <span> <strong>Policy</strong> and <strong>Cookies Policy</strong> .</span> 
        </div>
        
      </div>
      <div className="login">
        <span>Have an account?</span>
        <a href="#">Log in</a>
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

export default Signup;
