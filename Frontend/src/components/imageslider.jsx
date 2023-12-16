import React, { useState, useEffect } from 'react';

const ImageSlider = ({ img1, img2, img3 ,interval}) => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images]);

  return (
    <div className="w-full  overflow-hidden m-auto  ">
      <div
        className="flex transition-transform duration-500 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
