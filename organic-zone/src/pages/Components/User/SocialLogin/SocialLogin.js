import React from 'react';
import './SocialLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../SharedComponents/Loading/Loading';
import google from "../../../../images/google.png"


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
  
    let errorElement;
  
    if (loading) {
      return <Loading></Loading>;
    }
  
    if (error) {
      errorElement = <p className="text-danger">Error: {error?.message}</p>;
    }
  
    if (user) {
      navigate(from, { replace: true });
    }
  
    return (
      <div>
        <div className="social-text">
          <p>or, continue with Google</p>
        </div>
        {errorElement}
        <div>
          <button onClick={() => signInWithGoogle()} className="social-btn">
            <img style={{ width: "30px" }} src={google} alt="" />
            <span>Google Sign In</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default SocialLogin;