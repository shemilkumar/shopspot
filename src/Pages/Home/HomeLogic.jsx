import React from 'react'
import useFetchAllProducts from '../../api/useFetchAllProducts';
import Spinner from '../Spinner';
import Home from './Home';

function HomeLogic() {  

  // CUSTOM HOOK -- calling api request
  const products = useFetchAllProducts();

    return (
        <>
          {products.length === 0 ? <Spinner /> : <Home products={products} />}
        </> 
  )
}

export default HomeLogic;

