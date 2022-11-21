import React from "react";

function Profile({ user, sellProductByUser }) {
  return (
    <div>
      <main className="bg-gray-100 bg-opacity-25">
        <div className="lg:w-8/12 lg:mx-auto mb-8">
          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                            border-2 border-pink-600 p-1"
                src={user.imageUrl}
                alt="profile"
              />
            </div>

            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {user.firstName + " " + user.lastName}
                </h2>

                <span
                  className="inline-block fas fa-certificate fa-lg text-blue-500 
                                    relative mr-6 text-xl transform -translate-y-2"
                  aria-hidden="true"
                >
                  <i
                    className="fas fa-check text-white text-xs absolute inset-x-0
                                    ml-1 mt-px"
                  ></i>
                </span>

                <a
                  href="#"
                  className="bg-blue-500 px-2 py-1 
                                text-white font-semibold text-sm rounded block text-center 
                                sm:inline-block block"
                >
                  Follow
                </a>
              </div>

              <ul className="hidden md:flex space-x-8 mb-4">
                <li>
                  <span className="font-semibold">136 </span>
                  posts
                </li>
              </ul>

              <div className="hidden md:block">
                <h1 className="font-semibold">{user.emailAddress}</h1>
                {/* <p>{user.postal - code}</p> */}
                <p>{user.city}</p>
                <p>{user.region ? user.region : ""}</p>
              </div>
            </div>
          </header>

          <div className="px-px md:px-3">
            <ul
              className="flex items-center justify-around md:justify-center space-x-12  
                            uppercase tracking-widest font-semibold text-xs text-gray-600
                            border-t"
            >
              <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a className="inline-block p-3">
                  <i className="fas fa-th-large text-xl md:text-xs"></i>
                  <span className="hidden md:inline">posts</span>
                </a>
              </li>
            </ul>

            <div className="flex flex-wrap -mx-px md:-mx-3">
              {sellProductByUser.length === 0 ? (
                <h1 className="m-auto text-4xl">No products</h1>
              ) : (
                sellProductByUser.map((product, index) => {
                  return (
                    <div key={index} className="w-1/3 p-px md:px-3">
                      <a>
                        <article className="post h-80 w-72 bg-gray-100 text-white relative pb-full md:mb-6">
                          <img
                            className="w-full h-full absolute left-0 top-0 object-cover"
                            src={product.imageUrl}
                            alt="image"
                          />
                        </article>
                      </a>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;

{
  /* <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post h-80 w-72 bg-gray-100 text-white relative pb-full md:mb-6">
                    <img
                      className="w-full h-full absolute left-0 top-0 object-cover"
                      src="https://images.unsplash.com/photo-1498409570040-05bf6d3dd5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="image"
                    />
                  </article>
                </a>
              </div>

              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post h-80 w-72 bg-gray-100 text-white relative pb-full  md:mb-6">
                    <img
                      className="w-full h-full absolute left-0 top-0 object-cover"
                      src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="image"
                    />
                  </article>
                </a>
              </div>

              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post h-80 w-72 bg-gray-100 text-white relative pb-full md:mb-6">
                    <img
                      className="w-full h-full absolute left-0 top-0 object-cover"
                      src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="image"
                    />
                  </article>
                </a>
              </div> */
}
