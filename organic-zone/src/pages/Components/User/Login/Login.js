import React, { useRef } from "react";
import './Login.css';
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../../firebase.init";
import Loading from "../../../SharedComponents/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("email Sent");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-text">Login to Continue ...</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="login-inputs" controlId="formBasicEmail">
          <Form.Control
            className="input-txt"
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="login-inputs" controlId="formBasicPassword">
          <Form.Control
            className="input-txt"
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button className="input-btn" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        New to Creative Dentistry?{" "}
        <Link to="/register" className="to-register" onClick={navigateRegister}>
          Please Register
        </Link>{" "}
      </p>
      <p>
        Forget Password?
        <button className="forget-btn" onClick={resetPassword}>
          Reset Password
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;


