import React, { useState,useEffect } from 'react'
import useFetchProduct from '../../api/useFetchProduct';
import { useParams } from "react-router-dom";
import ProductDetail from "../Product/ProductDetail";
import Spinner from '../Spinner';

function ProductDetailLogic() {

  const { id } = useParams();

  const selectedProduct = useFetchProduct(id);

  return (
    <div>{Object.keys(selectedProduct).length === 0 ? <Spinner /> : <ProductDetail product={ selectedProduct } /> }</div>
  )
}

export default ProductDetailLogic