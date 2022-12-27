import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import ListView from "../../Components/ListView";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card";
import { categories, fashionCategories } from "../../Constants/constants";
import { FaListUl } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import noData from "../../assets/Images/undraw_No_data_re_kwbl.png";
import Spinner from "../Spinner";
import Alert from "../../Helper/Alert";
import { VscChromeClose } from "react-icons/vsc";

function Home({ wholeProducts, filterCategory }) {
  // const cartHandle = (product) => storeCartProduct(product);

  let fullProducts = wholeProducts.filter(
    (product) => product.id !== 29 && product.id !== 70 && product.id !== 45
  );

  const [showMore, setShowMore] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const alertShow = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1750);
  };

  const [grid, setGrid] = useState("");

  useEffect(() => {
    const gridLocal = localStorage.getItem("grid");
    gridLocal ? setGrid(gridLocal) : setGrid("list");

    // showAlert &&
    //   setTimeout(() => {
    //     setShowAlert(false);
    //   }, 2000);
  }, []);

  const popularProducts = fullProducts;
  const [allProducts, setAllProducts] = useState(fullProducts);
  const [searchText, setSearchText] = useState("");

  let categoryProducts = [];

  useEffect(() => {
    switch (filterCategory) {
      case "electronics":
        categoryProducts = fullProducts.filter(
          (product) =>
            product.category === "laptops" || product.category === "smartphones"
        );
        setAllProducts(categoryProducts);
        setGrid(true);
        break;

      case "fashion":
        categoryProducts = fullProducts.filter((product) =>
          fashionCategories.includes(product.category)
        );
        setAllProducts(categoryProducts);
        setGrid(true);
        break;

      default:
        break;
    }
  }, []);

  // if (filterCategory) setAllProducts(categoryProducts);

  const sortProducts = (value) => {
    switch (value) {
      case "priceLtoH":
        fullProducts.sort((a, b) => a.price - b.price);
        setAllProducts(fullProducts);
        break;

      case "priceHtoL":
        fullProducts.sort((a, b) => b.price - a.price);
        setAllProducts(fullProducts);
        break;

      case "rating":
        fullProducts.sort((a, b) => b.rating - a.rating);
        setAllProducts(fullProducts);
        break;

      case "discount":
        fullProducts.sort(
          (a, b) => b.discountPercentage - a.discountPercentage
        );
        setAllProducts(fullProducts);
        break;

      default:
        setAllProducts(popularProducts);
        break;
    }
  };

  const filterProducts = (searchInput) => {
    setSearchText(searchInput);

    const filteredProducts = fullProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchInput) ||
        product.brand.toLowerCase().includes(searchInput)
    );

    setAllProducts(filteredProducts);
  };

  const categoryFilter = (cat) => {
    if (cat === "All") {
      setAllProducts(popularProducts);
      return;
    }

    const filteredProducts = fullProducts.filter(
      (product) => product.category.toLowerCase() === cat.toLowerCase()
    );

    setAllProducts(filteredProducts);
  };

  const discountFilter = (value) => {
    if (value === "0") {
      console.log(value);
      const filteredProducts = fullProducts.filter(
        (product) => product.discountPercentage < 5
      );
      setAllProducts(filteredProducts);
      return;
    }

    const filteredProducts = fullProducts.filter(
      (product) => product.discountPercentage >= +value
    );
    setAllProducts(filteredProducts);
  };

  return (
    <>
      <Navbar
        currentPage="Products"
        pages={["Home", "Products", "Sell", "Profile", "Cart"]}
      />
      {showAlert && <Alert message="Product added to the cart." />}
      <div className="flex min-h-screen">
        <div
          className={`${
            showFilter
              ? "opacity-40 z-30 md:hidden"
              : "opacity-0 -z-30 md:hidden"
          } absolute top-0 left-0 h-screen w-screen bg-gray-800 overflow-y-hidden transition-all duration-1000 ease-in-out`}
        ></div>
        <div className="grid grid-cols-4 max-w-same mt-24 m-auto">
          <div
            className={`${
              showFilter
                ? "z-50 md:z-0 md:translate-x-0"
                : "md:translate-x-0 -translate-x-64 md:z-0 -z-50"
            }md:row-start-1 md:row-span-6 md:static absolute h-screen md:h-full
           top-0 left-0 bg-white md:bg-transparent transition-all duration-500 ease-in-out`}
          >
            <div className="filter m-4">
              <div className="search">
                <div className="md:hidden absolute flex items-center right-2 top-2 rounded-full w-6 h-6 bg-gray-500">
                  <VscChromeClose
                    className="text-white m-auto font-extrabold w-3 h-3"
                    onClick={() => setShowFilter(!showFilter)}
                  />
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="w-10/12"
                    type="text"
                    value={searchText}
                    placeholder="SEARCH..."
                    onChange={(e) => filterProducts(e.target.value)}
                  />
                </form>
              </div>
              <div className="mt-8">
                <h1 className="text-lg font-semibold mb-3">Category</h1>
                {showMore
                  ? categories.map((cat, i) => {
                      return (
                        <div key={i}>
                          <button
                            className="text-sm cursor-pointer text-gray-600 mb-1 focus:font-bold focus:text-blue-500 p-0"
                            key={i}
                            onClick={() => categoryFilter(cat)}
                          >
                            {cat}
                          </button>
                        </div>
                      );
                    })
                  : categories
                      .filter((_, i) => i < 5)
                      .map((cat, i) => {
                        return (
                          <div key={i}>
                            <button
                              className="text-sm cursor-pointer text-gray-600 mb-1 focus:font-bold focus:text-blue-500 p-0"
                              key={i}
                              onClick={() => categoryFilter(cat)}
                            >
                              {cat}
                            </button>
                          </div>
                        );
                      })}
              </div>
              <span
                className="text-blue-700 cursor-pointer"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "see less" : "Show more"}
              </span>

              <div className="discount mt-6">
                <h1 className="text-lg font-semibold mb-3">Discount</h1>
                <div>
                  <div>
                    <button
                      className="text-sm cursor-pointer text-gray-600 mb-1 focus:font-bold focus:text-blue-500 p-0"
                      onClick={(e) => discountFilter(e.target.value)}
                      value={15}
                    >
                      15% or More
                    </button>
                  </div>
                  <div>
                    <button
                      className="text-sm cursor-pointer text-gray-600 mb-1 focus:font-bold focus:text-blue-500 p-0"
                      onClick={(e) => discountFilter(e.target.value)}
                      value={10}
                    >
                      10% or More
                    </button>
                  </div>
                  <div>
                    <button
                      className="text-sm cursor-pointer text-gray-600 mb-1 focus:font-bold focus:text-blue-500 p-0"
                      onClick={(e) => discountFilter(e.target.value)}
                      value={5}
                    >
                      5% or More
                    </button>
                  </div>
                  <div>
                    <button
                      className="text-sm cursor-pointer text-gray-600 mb-1 focus:font-bold focus:text-blue-500 p-0"
                      onClick={(e) => discountFilter(e.target.value)}
                      value={0}
                    >
                      5% and Below
                    </button>
                  </div>
                </div>
              </div>

              <div className="clear mt-8">
                <button
                  onClick={(e) => sortProducts(e)}
                  className="py-2 px-4 bg-blue-600 text-white text-sm font-lg rounder-2xl hover:bg-blue-800"
                >
                  Clear Filter
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-start-2 row-start-1 md:col-span-3 col-span-4 mb-6">
            <div className="flex justify-between">
              <div className="flex justify-center items-center my-2">
                <div
                  className={
                    grid === "list"
                      ? "w-8 h-8 flex bg-green-400 text-white"
                      : "w-8 h-8 flex text-gray-500"
                  }
                  onClick={() => {
                    setGrid("list");
                    localStorage.setItem("grid", "list");
                  }}
                >
                  <FaListUl className="w-5 h-5 m-auto" />
                </div>
                <div
                  className={
                    grid === "grid"
                      ? "w-8 h-8 flex bg-green-400 text-white"
                      : "w-8 h-8 flex text-gray-500"
                  }
                  onClick={() => {
                    setGrid("grid");
                    localStorage.setItem("grid", "grid");
                  }}
                >
                  <BsFillGrid3X3GapFill className="w-5 h-5 m-auto" />
                </div>
              </div>

              <div
                className="md:hidden bg-cyan-600 text-white rounded-full py-1 m-auto font-semibold text-md px-4 tracking-wider"
                onClick={() => setShowFilter(!showFilter)}
              >
                filter
              </div>

              <div className="">
                <label htmlFor="sort" className="hidden">
                  Sort by{" "}
                </label>
                <select
                  className="border-none"
                  name="sort"
                  id="sort"
                  onChange={(e) => sortProducts(e.target.value)}
                >
                  <option value="popular">Popular</option>
                  <option value="priceLtoH">Price (Low to High)</option>
                  <option value="priceHtoL">Price (High to Low)</option>
                  <option value="rating">Rating</option>
                  <option value="discount">Discount</option>
                </select>
              </div>
            </div>
          </div>

          <div className="md:col-start-2 col-start-1 row-start-2 md:col-span-3 col-span-4 row-span-5">
            {grid === "" && (
              <div className="min-h-screen text-center">
                <Spinner />
              </div>
            )}

            {allProducts.length === 0 && (
              <div className="mt-20 text-center">
                <span className="uppercase text-3xl font-semibold">
                  No Products
                </span>
                <img src={noData} alt="" className="w-1/4 h-1/4 m-auto" />
              </div>
            )}
            <div>
              {allProducts.length !== 0 &&
                grid === "list" &&
                allProducts.map((product, i) => {
                  return (
                    <div key={i} className="mt-8 pb-16 border-b-1">
                      <ListView
                        product={product}
                        // storeCartProduct={storeCartProduct}
                      />
                    </div>
                  );
                })}
            </div>

            <div className="grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 md:gap-4 gap-0.25">
              {allProducts.length !== 0 &&
                grid === "grid" &&
                allProducts.map((product, i) => {
                  return (
                    <div key={i} className="md:mt-8 md:pb-8 md:border-b-1">
                      <Card product={product} alertShow={alertShow} />
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="bg-blue-700 text-white p-2 rounded-full m-2 text-xl font-semibold"
              >
                <AiOutlineArrowUp />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

{
  /* <div className="grid grid-cols-3 gap-3 content-center">
      {fullProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="relative max-w-sm rounded overflow-hidden shadow-lg"
          >
            <Link
              to={
                product.id
                  ? `/product/${product.id}`
                  : `/product/${index + 1000}`
              }
            >
              <img
                className="w-full"
                src={product.thumbnail ? product.thumbnail : product.imageUrl}
                alt={product.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2 mb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.brand}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.price}
                </span>
              </div>
            </Link>

            <button
              onClick={() => cartHandle(product)}
              className="hover:bg-blue-700 absolute inset-x-0 bottom-0 mt-3 uppercase text-white bg-red-600 py-3 px-8 rounded-md font-poppins font-semibold text-lg"
            >
              Cart
            </button>
          </div>
        );
      })}
    </div><div className="grid grid-cols-3 gap-3 content-center">
      {fullProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="relative max-w-sm rounded overflow-hidden shadow-lg"
          >
            <Link
              to={
                product.id
                  ? `/product/${product.id}`
                  : `/product/${index + 1000}`
              }
            >
              <img
                className="w-full"
                src={product.thumbnail ? product.thumbnail : product.imageUrl}
                alt={product.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2 mb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.brand}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.price}
                </span>
              </div>
            </Link>

            <button
              onClick={() => cartHandle(product)}
              className="hover:bg-blue-700 absolute inset-x-0 bottom-0 mt-3 uppercase text-white bg-red-600 py-3 px-8 rounded-md font-poppins font-semibold text-lg"
            >
              Cart
            </button>
          </div>
        );
      })}
    </div> */
}
