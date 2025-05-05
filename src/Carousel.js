import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // cleanup on unmount
  }, [images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const { src, title, description } = images[currentIndex];

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button left">{'<'}</button>

      <div className="carousel-content">
        <img src={src} alt={title} className="carousel-image" />
        <div className="carousel-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <button onClick={goToNext} className="carousel-button right">{'>'}</button>
    </div>
  );
};

export default Carousel;
