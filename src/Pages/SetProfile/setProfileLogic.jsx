import React from "react";
import SetProfile from "./setProfile";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import useAuth from "../../Firebase/useAuth";
import { useNavigate } from "react-router-dom";

function SetProfileLogic() {
  const uid = useAuth();
  const navigate = useNavigate();

  const setUserDetails = (data) => {
    uid && firebaseDbService.setUserData(uid, data);
    navigate("/profile");
  };

  console.log(uid);

  return (
    <>
      <SetProfile setUserDetails={setUserDetails} />
    </>
  );
}

export default SetProfileLogic;
