import React, { useEffect } from "react";
import SellPage from "./sellPage";
import useAuth from "../../Firebase/useAuth";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

  const setSellProduct = (sellProduct) =>
    uid && firebaseDbService.setSellProductData(uid, sellProduct, navigate);

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
