import React from "react";

function Cart({ cartProducts }) {

  return (
    <>
      {cartProducts.map((cartProduct) => {
        return (
          <div key={cartProduct.id} className="max-w-screen-lg m-auto">
            <div className="m-8 p-8 border-2 md:flex items-center py-8 border-t border-gray-200">
              <div className="w-1/4">
                    <img src={cartProduct.images[0]} alt={cartProduct.title } className="w-full h-full object-center object-cover" />
              </div>
              <div className="text-lg md:pl-3 md:w-3/4 w-full">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{cartProduct.brand }</p>
                
                <div className="flex items-center justify-between w-full pt-1">
                      <p className="text-base font-black leading-none text-gray-800">{cartProduct.title }</p>
                </div>
                
                  <p className="text-xs leading-3 text-gray-600 pt-2">{cartProduct.rating }</p>
                  <p className="text-xs leading-3 text-gray-600 py-4">{cartProduct.category }</p>
                  <p className="w-96 text-xs leading-3 text-gray-600">Quantity</p>
                  <div className="flex items-center justify-between pt-5 pr-6">
                      <div className="flex itemms-center">
                          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                      </div>
                      <p className="text-base font-black leading-none text-gray-800">{cartProduct.price }</p>
                  </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
    );
}

export default Cart;
