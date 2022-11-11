import React,{useEffect} from 'react'
import fetchAllProducts from '../../api/fetchAllProducts';
import Spinner from '../Spinner';
import Home from './Home';
import { useDispatch, useSelector } from "react-redux";


function HomeLogic() {  

  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.allProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
}, []);
  
    return (
        <>
          {products.length === 0 ? <Spinner /> : <Home products={products} />}
        </> 
  )
}

export default HomeLogic;

