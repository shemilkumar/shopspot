import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import useAuth from '../../Firebase/useAuth';
import firebaseDbService from '../../Firebase/FirebaseDbService';
import Spinner from '../Spinner';
import Cart from "./cart";

function cartLogic() {

    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.cart);

    const uid = useAuth();
    
    useEffect(() => {
        uid !== '' && dispatch(firebaseDbService.getCartProducts(uid));
    }, [uid]);
    
    console.log(cartProducts);

    return (
        <>
            {cartProducts.length === 0 ? <Spinner /> : <Cart cartProducts={cartProducts} />}
            {/* { cartProducts.length === 0 ? <h1 className='m-auto text-4xl'>No Cart Products</h1> : '' } */}
        </>
    )
}

export default cartLogic;
