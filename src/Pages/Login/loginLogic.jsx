import React, { useEffect } from "react";
import firebaseAuthService from "../../Firebase/FirebaseAuthService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginPage from "./loginPage";

function LoginLogic() {
  const userDetails = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (loginEmail, loginPassword) =>
    dispatch(
      firebaseAuthService.loginService(loginEmail, loginPassword, navigate)
    );

  useEffect(() => {
    // userDetails.uid !== '' && navigate('/');
  }, [userDetails.uid]);

  return (
    <>
      <LoginPage login={login} />
    </>
  );
}

export default LoginLogic;
