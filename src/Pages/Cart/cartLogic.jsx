import React, { useEffect } from "react";
import useAuth from "../../Firebase/useAuth";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Spinner from "../Spinner";
import Cart from "./cart";

function cartLogic() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);

  const uid = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    uid === "" || uid === null
      ? navigate("/login")
      : dispatch(firebaseDbService.getCartProducts(uid));
  }, [uid, cartProducts]);

  // console.log(uid);
  // console.log(cartProducts);

  return (
    <>{cartProducts ? <Cart cartProducts={cartProducts} /> : <Spinner />}</>
  );
}

export default cartLogic;
