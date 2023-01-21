import React, { useEffect, useState } from "react";
import { categories, fashionCategories } from "../../Constants/constants";

import Footer from "../../Components/Footer";
import ListView from "../../Components/ListView";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card";
import Spinner from "../Spinner";
import Alert from "../../Helper/Alert";
import noData from "../../assets/Images/undraw_No_data_re_kwbl.png";

import { FaListUl } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { TbArrowsLeftRight } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";

function Home({ wholeProducts, filterCategory }) {
  let fullProducts = wholeProducts.filter(
    (product) => product.id !== 29 && product.id !== 70 && product.id !== 45
  );

  // const popularProducts = fullProducts;
  let categoryProducts = [];

  const [showMore, setShowMore] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const [grid, setGrid] = useState("");
  const [searchText, setSearchText] = useState("");
  const [allProducts, setAllProducts] = useState(fullProducts);
  const [popularProducts, setPopularProducts] = useState(fullProducts);

  const alertShow = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1750);
  };

  // useEffect(() => {
  //   const gridLocal = localStorage.getItem("grid");
  //   gridLocal ? setGrid(gridLocal) : setGrid("grid");
  // }, []);

  useEffect(() => {
    const gridLocal = localStorage.getItem("grid");
    gridLocal ? setGrid(gridLocal) : setGrid("grid");

    switch (filterCategory) {
      case "electronics":
        categoryProducts = fullProducts.filter(
          (product) =>
            product.category === "laptops" || product.category === "smartphones"
        );

        setPopularProducts(categoryProducts);
        setAllProducts(categoryProducts);
        setGrid("grid");
        break;

      case "fashion":
        categoryProducts = fullProducts.filter((product) =>
          fashionCategories.includes(product.category)
        );

        setPopularProducts(categoryProducts);
        setAllProducts(categoryProducts);
        setGrid("grid");
        break;

      default:
        break;
    }
  }, []);

  // console.log("jii", allProducts);

  const filterProducts = (searchInput) => {
    setSearchText(searchInput);

    const filteredProducts = fullProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchInput.toLowerCase())
    );

    setPopularProducts(filteredProducts);
    setAllProducts(filteredProducts);
  };

  const categoryFilter = (cat) => {
    screen.width <= 1120 && setShowFilter(!showFilter);

    if (cat === "All") {
      setAllProducts(fullProducts);
      return;
    }

    const filteredProducts = fullProducts.filter(
      (product) => product.category.toLowerCase() === cat.toLowerCase()
    );

    setPopularProducts(filteredProducts);
    setAllProducts(filteredProducts);
    // console.log("all =>", allProducts, "full =>", fullProducts);
  };

  const discountFilter = (value) => {
    screen.width <= 1120 && setShowFilter(!showFilter);

    if (value === "0") {
      console.log(value);
      const filteredProducts = fullProducts.filter(
        (product) => product.discountPercentage < 5
      );

      setPopularProducts(filteredProducts);
      setAllProducts(filteredProducts);
      return;
    }

    const filteredProducts = fullProducts.filter(
      (product) => product.discountPercentage >= +value
    );
    setPopularProducts(filteredProducts);
    setAllProducts(filteredProducts);
  };

  // console.log(allProducts);
  let sortedProducts;

  const sortProducts = (value) => {
    switch (value) {
      case "priceLtoH":
        sortedProducts = [...allProducts].sort((a, b) => a.price - b.price);
        setAllProducts(sortedProducts);
        // console.log(allProducts);
        break;

      case "priceHtoL":
        sortedProducts = [...allProducts].sort((a, b) => b.price - a.price);
        setAllProducts(sortedProducts);
        // console.log(allProducts);
        break;

      case "rating":
        sortedProducts = [...allProducts].sort((a, b) => b.rating - a.rating);
        setAllProducts(sortedProducts);
        break;

      case "discount":
        sortedProducts = [...allProducts].sort(
          (a, b) => b.discountPercentage - a.discountPercentage
        );
        setAllProducts(sortedProducts);
        break;

      default:
        setAllProducts(popularProducts);
        break;
    }
  };

  return (
    <div
      className={
        showFilter
          ? "fixed dark:bg-gray-900 bg-gray-100"
          : "bg-gray-100 dark:bg-gray-900"
      }
      s
    >
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
        <div className="grid grid-cols-4 md:max-w-same w-[95%] mt-24 m-auto">
          <div
            className={`${
              showFilter
                ? "z-50 md:z-0 md:translate-x-0"
                : "md:translate-x-0 -translate-x-full md:z-0 -z-50"
            }md:row-start-1 md:row-span-6 md:static absolute h-screen md:h-full
           top-0 left-0 bg-white dark:bg-gray-900 dark:text-teal-50 md:bg-transparent transition-all duration-500 ease-in-out`}
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
                    className="w-10/12 md:w-1/2 px-1.5 py-1 md:px-3 md:py-1.5 border-2 border-gray-400 dark:text-gray-900 focus:outline-none"
                    type="text"
                    value={searchText}
                    placeholder="SEARCH..."
                    onChange={(e) => filterProducts(e.target.value)}
                  />
                </form>
              </div>
              <div className="mt-8 ">
                <h1 className="text-lg font-semibold mb-3">Category</h1>
                <div className="grid grid-cols-2 md:grid-cols-1">
                  {showMore
                    ? categories.map((cat, i) => {
                        return (
                          <div key={i}>
                            <button
                              className="text-sm cursor-pointer text-gray-600 dark:text-gray-400  mb-1 focus:font-bold focus:text-blue-500 p-0"
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
                                className="text-sm cursor-pointer text-gray-600 dark:text-gray-400 mb-1 focus:font-bold focus:text-blue-500 p-0"
                                key={i}
                                onClick={() => categoryFilter(cat)}
                              >
                                {cat}
                              </button>
                            </div>
                          );
                        })}
                </div>
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
                      className="text-sm cursor-pointer text-gray-600  dark:text-gray-400 mb-1 focus:font-bold focus:text-blue-500 p-0"
                      onClick={(e) => discountFilter(e.target.value)}
                      value={15}
                    >
                      15% or More
                    </button>
                  </div>
                  <div>
                    <button
                      className="text-sm cursor-pointer text-gray-600 mb-1 dark:text-gray-400 focus:font-bold focus:text-blue-500 p-0"
                      onClick={(e) => discountFilter(e.target.value)}
                      value={10}
                    >
                      10% or More
                    </button>
                  </div>
                  <div>
                    <button
                      className="text-sm cursor-pointer text-gray-600 mb-1 dark:text-gray-400 focus:font-bold focus:text-blue-500 p-0"
                      onClick={(e) => discountFilter(e.target.value)}
                      value={5}
                    >
                      5% or More
                    </button>
                  </div>
                  <div>
                    <button
                      className="text-sm cursor-pointer text-gray-600 mb-1 dark:text-gray-400 focus:font-bold focus:text-blue-500 p-0"
                      onClick={(e) => discountFilter(e.target.value)}
                      value={0}
                    >
                      5% and Below
                    </button>
                  </div>
                </div>
              </div>

              <div className="md:mt-8 mt-4">
                <button
                  onClick={(e) => {
                    screen.width <= 1120 && setShowFilter(!showFilter);
                    setPopularProducts(fullProducts);
                    setAllProducts(fullProducts);
                  }}
                  className="py-2 px-4 bg-blue-600 text-white text-sm font-lg rounder-2xl hover:bg-blue-800"
                >
                  Clear Filter
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-start-2 row-start-1 md:col-span-3 col-span-4 mb-6 ">
            <div className="flex justify-between items-center md:w-full w-[90%] m-auto">
              <div className="hidden md:flex justify-center items-center my-2">
                <div
                  className={
                    grid === "list"
                      ? "md:w-8 md:h-8 w-7 h-7 flex bg-green-400 text-white rounded-full"
                      : "w-8 h-8 flex text-gray-500"
                  }
                  onClick={() => {
                    setGrid("list");
                    localStorage.setItem("grid", "list");
                  }}
                >
                  <FaListUl className="md:w-5 md:h-5 w-3.5 h-3.5 m-auto" />
                </div>
                <div
                  className={
                    grid === "grid"
                      ? "md:w-8 md:h-8 w-7 h-7 flex bg-green-400 text-white rounded-full"
                      : "w-8 h-8 flex text-gray-500"
                  }
                  onClick={() => {
                    setGrid("grid");
                    localStorage.setItem("grid", "grid");
                  }}
                >
                  <BsFillGrid3X3GapFill className="md:w-5 md:h-5 w-3.5 h-3.5 m-auto" />
                </div>
              </div>

              <div
                className="md:hidden flex justify-center items-center w-7 h-7 bg-cyan-600 text-white rounded-full py-2 font-semibold px-2 tracking-wider"
                onClick={() => setShowFilter(!showFilter)}
              >
                <TbArrowsLeftRight />
              </div>

              <div className="">
                <label htmlFor="sort" className="hidden md:visible">
                  Sort by{" "}
                </label>
                <select
                  className="border-none md:border-4 md:px-4 md:py-2 px-2 py-1.5 text-sm w-40"
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
                <span className="uppercase text-3xl font-semibold dark:text-teal-50">
                  No Products
                </span>
                <img
                  src={noData}
                  alt=""
                  className="mt-6 w-1/2 md:w-1/4 h-1/4 m-auto"
                />
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

            <div className="grid md:grid-cols-3 xl:grid-cols-4 xs:grid-cols-2 grid-cols-1 md:gap-4 gap-0.25">
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
            <div
              className={`${
                allProducts.length < 5 ? "hidden" : ""
              } flex justify-end`}
            >
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
    </div>
  );
}

export default Home;
