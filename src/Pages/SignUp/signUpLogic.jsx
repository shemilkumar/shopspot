import React, { useEffect } from "react";
import SignUpPage from "./signUp";
import firebaseAuthService from "../../Firebase/FirebaseAuthService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignUpLogic() {
  const userDetails = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUp = (signUpEmail, signUpPassword, confirmPassword, name) => {
    if (signUpPassword !== confirmPassword) {
      console.error("password not matched");
      return;
    }
    dispatch(
      firebaseAuthService.signUpService(
        signUpEmail,
        signUpPassword,
        name,
        navigate
      )
    );
  };

  useEffect(() => {
    // userDetails.uid !== '' && navigate('/');
  }, [userDetails.uid]);

  return (
    <>
      <SignUpPage signUp={signUp} />
    </>
  );
}

export default SignUpLogic;
