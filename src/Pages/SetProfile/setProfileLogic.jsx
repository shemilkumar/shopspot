import React from "react";
import SetProfile from "./setProfile";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import useAuth from "../../Firebase/useAuth";

function SetProfileLogic() {
  const uid = useAuth();

  const setUserDetails = (data) => {
    console.log(data);
    uid && firebaseDbService.setUserData(uid, data);
  };

  console.log(uid);

  return (
    <>
      <SetProfile setUserDetails={setUserDetails} />
    </>
  );
}

export default SetProfileLogic;
