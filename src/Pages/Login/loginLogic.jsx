import React, { useEffect } from 'react'
import LoginPage from "./loginPage";
import firebaseAuthService from "../../Firebase/FirebaseAuthService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginLogic() {

    const userDetails = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // firebaseAuthService.currentUserService();

    const login = (loginEmail, loginPassword) =>
        dispatch(firebaseAuthService.loginService(loginEmail, loginPassword));

    useEffect(() => {
        userDetails.uid !== '' && navigate('/');
    }, [userDetails.uid]);

    return (
        <>
            <LoginPage login={login} />
        </>
    )
}

export default LoginLogic