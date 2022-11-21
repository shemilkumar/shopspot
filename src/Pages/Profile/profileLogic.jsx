import React from "react";
import { useEffect } from "react";
import useAuth from "../../Firebase/useAuth";
import Spinner from "../Spinner";
import Profile from "./profile";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import firebaseDbService from "../../Firebase/FirebaseDbService";

function ProfileLogic() {
  const uid = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const sellProductByUser = useSelector(
    (state) => state.user.sellProductByUser
  );

  useEffect(() => {
    console.log(uid);
    uid && dispatch(firebaseDbService.getSellProductsByUser(uid));
    uid && dispatch(firebaseDbService.getUserData(uid));
  }, [uid]);

  console.log(user);
  uid === null && navigate("/signup");

  return (
    <>
      {uid && user && sellProductByUser ? (
        <Profile user={user} sellProductByUser={sellProductByUser} />
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default ProfileLogic;
