import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ImageGrid({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="m-auto grid grid-row-4 grid-cols-2 items-center justify-center h-[100%] w-[90%]">
      <div className="flex flex-col justify-center items-center h-full w-full">
        {images.map((image, i) => {
          return (
            <button
              key={i}
              className="w-1/4 mt-5"
              onMouseOver={() => setCurrentImage(image)}
            >
              <LazyLoadImage effect="blur" src={image} alt="" />
            </button>
          );
        })}
      </div>
      <div className="">
        <LazyLoadImage effect="blur" src={currentImage} alt="" />
      </div>{" "}
    </div>
  );
}

export default ImageGrid;
