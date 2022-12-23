import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import Spinner from "../Spinner";
import Profile from "./profile";
import useAuth from "../../Firebase/useAuth";

function ProfileLogic() {
  const uid = useAuth();
  const { userUid } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const userProfile = useSelector((state) => state.user.userProfile);

  const sellProductByUser = useSelector(
    (state) => state.user.sellProductByUser
  );

  const sellProductByAnotherUser = useSelector(
    (state) => state.user.sellProductByAnotherUser
  );

  useEffect(() => {
    uid && dispatch(firebaseDbService.getSellProductsByUser(uid, false));
    uid && dispatch(firebaseDbService.getUserData(uid, false));

    userUid && dispatch(firebaseDbService.getSellProductsByUser(userUid, true));
    userUid && dispatch(firebaseDbService.getUserData(userUid, true));

    uid === null && navigate("/login");
  }, [userUid, uid]);

  console.log(sellProductByUser);

  return (
    <>
      {(user.uid || userUid) && user && sellProductByUser ? (
        <Profile
          user={userUid ? userProfile : user}
          sellProductByUser={
            userUid ? sellProductByAnotherUser : sellProductByUser
          }
          userUid={userUid}
        />
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default ProfileLogic;
