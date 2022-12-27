import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ImageGrid({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="m-auto grid grid-row-4 md:grid-cols-2 grid-cols-1 items-center justify-center md:h-[100%] w-[90%]">
      <div className=" flex md:flex-col  justify-center items-center h-full w-full">
        {images.map((image, i) => {
          return (
            <button
              key={i}
              className="md:w-1/4 w-14 mt-5 mr-2 md:mr-0"
              onMouseOver={() => setCurrentImage(image)}
            >
              <LazyLoadImage effect="blur" src={image} alt="" />
            </button>
          );
        })}
      </div>
      <div className="row-start-1 h-[500px] bg-white flex items-center">
        <LazyLoadImage effect="blur" src={currentImage} alt="" />
      </div>{" "}
    </div>
  );
}

export default ImageGrid;
