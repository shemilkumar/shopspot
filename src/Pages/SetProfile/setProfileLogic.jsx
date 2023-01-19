import React from "react";
import useAuth from "../../Firebase/useAuth";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import { useNavigate } from "react-router-dom";

import SetProfile from "./setProfile";

function SetProfileLogic() {
  const uid = useAuth();
  const navigate = useNavigate();

  const setUserDetails = (data) => {
    uid && firebaseDbService.setUserData(uid, data);
    navigate("/profile");
  };

  // console.log(uid);

  return (
    <>
      <SetProfile setUserDetails={setUserDetails} />
    </>
  );
}

export default SetProfileLogic;
