import React, { useEffect } from "react";
import SellPage from "./sellPage";
import useAuth from "../../Firebase/useAuth";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FirebaseDbService from "../../Firebase/FirebaseDbService";

function SellPageLogic() {
  const uid = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sellProductByUser = useSelector(
    (state) => state.user.sellProductByUser
  );

  useEffect(() => {
    // console.log("Result =>", sellProductByUser);
    // console.log(uid);
    // !uid && navigate("/login");
  }, [sellProductByUser, uid]);

  const setSellProduct = async (sellProduct) => {
    const soldUser = await FirebaseDbService.getSingleUserData(uid);
    // console.log(soldUser);
    // console.log({ ...sellProduct, soldUser });
    uid &&
      firebaseDbService.setSellProductData(
        uid,
        { ...sellProduct, soldUser },
        navigate
      );
  };
  // const show = (e) => {
  //   e.preventDefault();
  //   uid && dispatch(firebaseDbService.getSellProductsByUser(uid));
  // };

  return (
    <>
      {uid ? <SellPage setSellProduct={setSellProduct} /> : navigate("/login")}
    </>
  );
}

export default SellPageLogic;
