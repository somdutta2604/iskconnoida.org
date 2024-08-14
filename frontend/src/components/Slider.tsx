import { useCallback, useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";

interface SliderProps {
  slides: { img: string; title: string; date: string }[];
  onClose: () => void; // Callback to handle closing the slider
}

const Slider: React.FC<SliderProps> = ({ slides, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Move to the next slide
  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setProgress(0);
  }, [setCurrentIndex, slides.length]);

  // Move to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
    setProgress(0);
  };
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        sliderRef.current &&
        !sliderRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose],
  );
  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    // Interval to update progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          // If the current slide is the last one, close the slider
          if (currentIndex === slides.length - 1) {
            onClose();
            return 0;
          }
          goToNextSlide();
          return 0;
        }
        return prevProgress + 25 / (slides.length * 5);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length, onClose, goToNextSlide]);

  return (
    <div
      ref={sliderRef}
      className="relative flex flex-col bg-transparent w-[460px] h-full mx-auto"
    >
      {/*Slide Title */}
      <div className="w-full flex text-gray-300 absolute top-8 left-8 text-base gap-1">
        <h1>{slides[currentIndex].title} - </h1>
        <h1> {slides[currentIndex].date}</h1>
      </div>
      {/* Slide Image */}
      <img
        src={slides[currentIndex].img}
        alt={slides[currentIndex].title}
        className="w-full h-full object-cover"
      />

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={goToPrevSlide}
          className="bg-transparent h-full w-1/2 text-white p-2 rounded-full shadow-lg"
        >
          &lt;
        </button>
        <button
          onClick={goToNextSlide}
          className="bg-transparent h-full w-1/2 text-white p-2 rounded-full shadow-lg"
        >
          &gt;
        </button>
      </div>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-8 text-gray-300 shadow-lg"
      >
        <FaXmark />
      </button>

      {/* Progress Bar */}
      <div className="absolute top-1 left-0 right-0 flex h-1 gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className="flex-1"
            style={{
              background:
                index < currentIndex
                  ? "#ffffff"
                  : index === currentIndex
                    ? `linear-gradient(to right, #ffffff ${progress}%, #757578 ${progress}%)`
                    : "#757578",
              transition: "background 0.1s linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
