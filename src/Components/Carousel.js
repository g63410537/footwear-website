import React, { useCallback, useEffect, useState } from "react";
import './utils/index.css'

const Carousel = ({
  images,
  autoplayInterval,
  showControls = true,
  showIndicators = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (autoplayInterval) {
      const autoplay = setInterval(handleNext, autoplayInterval);
      return () => clearInterval(autoplay);
    }
  }, [autoplayInterval, handleNext]);

  const currentTransform = -activeIndex * 100;

  // ______ Keyoboard Navigation ________
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrev();
    }
  };

  // _______ Pagination Indicator _______
  const renderPaginationIndicatiors = () => {
    return images.map((_, index) => (
      <button
        key={index}
        className={`pagination-indicator ${
          index === activeIndex ? "active" : ""
        }`}
        onClick={() => setActiveIndex(index)}
      ></button>
    ));
  };
  return (
    <div
      className="carousel-wrapper"
      onKeyDown={handleKeyDown}
      tabIndex="0"
      aria-live="polite"
      aria-roledescription="carousel"
    >
      <div
        className="carousel-items"
        style={{ transform: `translateX(${currentTransform}%)` }}
      >
        {images.map((source, i) => (
          <img
            src={source}
            alt={`profile- ${i}`}
            key={i}
            className="carousel-item"
          />
        ))}
      </div>

      {/* _____pagination indicator function_____ */}
      {showIndicators && (
        <div className="pagination-indicators">
          {renderPaginationIndicatiors()}
        </div>
      )}

      {/* _____navigation buttons______ */}
      {showControls && (
        <>
          <button
            className="carousel-controls prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined">Previous</span>
          </button>
          <button
            className="carousel-controls next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined">Next</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
