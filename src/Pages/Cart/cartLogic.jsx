import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useAuth from "../../Firebase/useAuth";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import Spinner from "../Spinner";
import Cart from "./cart";
import { useNavigate } from "react-router-dom";

function cartLogic() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);

  const uid = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    uid === "" || uid === null
      ? navigate("/login")
      : dispatch(firebaseDbService.getCartProducts(uid));
  }, [uid]);

  // console.log(uid);
  // console.log(cartProducts);

  return (
    <>
      {cartProducts ? <Cart cartProducts={cartProducts} /> : <Spinner />}
      {/* { cartProducts.length === 0 ? <h1 className='m-auto text-4xl'>No Cart Products</h1> : '' } */}
    </>
  );
}

export default cartLogic;
