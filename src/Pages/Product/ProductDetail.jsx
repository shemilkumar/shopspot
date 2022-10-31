import React, { useEffect, useState } from 'react'

function ProductDetail({product}) {

  return (
      <div className='flex h-screen'>
        <a className="m-auto flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={product.images[0]} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
            </div>
        </a>
    </div>
  )
}

export default ProductDetail