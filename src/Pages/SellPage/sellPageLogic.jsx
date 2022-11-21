import React, { useEffect } from "react";
import SellPage from "./sellPage";
import useAuth from "../../Firebase/useAuth";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import { useDispatch, useSelector } from "react-redux";

function SellPageLogic() {
  const uid = useAuth();
  const dispatch = useDispatch();
  const sellProductByUser = useSelector(
    (state) => state.user.sellProductByUser
  );

  const setSellProduct = (sellProduct) =>
    uid && firebaseDbService.setSellProductData(uid, sellProduct);

  // const show = (e) => {
  //   e.preventDefault();
  //   uid && dispatch(firebaseDbService.getSellProductsByUser(uid));
  // };

  useEffect(() => {
    console.log("Result =>", sellProductByUser);
  }, [sellProductByUser]);

  return (
    <>
      <SellPage setSellProduct={setSellProduct} />
    </>
  );
}

export default SellPageLogic;
