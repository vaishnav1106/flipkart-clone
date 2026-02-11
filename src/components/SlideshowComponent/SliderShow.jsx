import { useState, useEffect, useRef } from "react";
import "./SlideShow.css";
import SlideImg1 from "./SliderImages/valentine1.webp";
import SlideImg2 from "./SliderImages/vivo.png";
import SlideImg3 from "./SliderImages/poco1.png";
import SlideImg4 from "./SliderImages/oopo.png";
import SlideImg5 from "./SliderImages/realme.png";
import SlideImg6 from "./SliderImages/poco.png";
import SlideImg7 from "./SliderImages/intel.png";
import SlideImg8 from "./SliderImages/intel1.png";
import SlideImg9 from "./SliderImages/valentine.webp";
import SlideImg10 from "./SliderImages/VivoT4.png";
import SlideImgL1 from "./SliderImages/realmeL.png";
import SlideImgL2 from "./SliderImages/val.jpg";
import SlideImgL3 from "./SliderImages/flight.jpg";
import SlideImgL4 from "./SliderImages/flight2.jpg";
import SlideImgL5 from "./SliderImages/val.jpg";
import SlideImgL6 from "./SliderImages/val2.jpg";
import ArrowRight from "./SliderImages/ArrowRight.svg";
import ArrowLeft from "./SliderImages/ArrowLeft.svg";

const slides = [
  {
    image: SlideImg1,
    description: "image1",
  },
  {
    image: SlideImg2,
    description: "image2",
  },
  {
    image: SlideImg3,
    description: "image3",
  },
  {
    image: SlideImg4,
    description: "image4",
  },
  {
    image: SlideImg5,
    description: "image5",
  },
  {
    image: SlideImg6,
    description: "image6",
  },
  {
    image: SlideImg7,
    description: "image7",
  },
  {
    image: SlideImg8,
    description: "image8",
  },
  {
    image: SlideImg9,
    description: "image9",
  },
  {
    image: SlideImg10,
    description: "image10",
  },
];

const slidesLarge = [
  {
    img: SlideImgL1,
    description: "imageL1",
  },
  {
    img: SlideImgL2,
    description: "imageL2",
  },
  {
    img: SlideImgL3,
    description: "imageL3",
  },
  {
    img: SlideImgL4,
    description: "imageL4",
  },
  {
    img: SlideImgL5,
    description: "imageL5",
  },
  {
    img:SlideImgL6,
    description: "imageL6"
  },
];

function Slide() {
  const sliderRef = useRef(null);
  const sliderLargeRef = useRef(null);

  const slideWidthRef = useRef(null);
  const slideLargeWidthRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLargeIndex, setCurrentLargeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setCurrentLargeIndex((prev) =>
        prev === slidesLarge.length - 1 ? 0 : prev + 1,
      );
    }, 3000);
    return () => clearInterval(timer);
  });

  function slidePrev() {
    setCurrentLargeIndex((prev) =>
      prev === 0 ? slidesLarge.length - 1 : prev - 1,
    );
  }

  function slideNext() {
    setCurrentLargeIndex((prev) =>
      prev === slidesLarge.length - 1 ? 0 : prev + 1,
    );
  }

  useEffect(() => {
    if (sliderRef) {
      sliderRef.current.scrollTo({
        top: 0,
        left: currentIndex * (slideWidthRef.current.clientWidth + 20),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    if (sliderLargeRef) {
      sliderLargeRef.current.scrollTo({
        top: 0,
        left: currentLargeIndex * slideLargeWidthRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  }, [currentLargeIndex]);

  return (
    <>
      <div className="slide-section-main">
        <div className="slide-image-section" ref={sliderRef}>
          {slides.map((slide, index) => {
            return (
              <img
                key={index}
                src={slide.image}
                alt={slide.description}
                className={"slide-image"}
                ref={slideWidthRef}
              />
            );
          })}
        </div>
        <div className="slide-progress-bar">
          {slides.map((_, index) => {
            return (
              <div
                key={index}
                id={index}
                className={
                  index === currentIndex
                    ? "progress-bar-open"
                    : "progress-bar close"
                }
              ></div>
            );
          })}
        </div>
      </div>
      <div className="slide-image-large-main">
        <div className="slide-image-large" ref={sliderLargeRef}>
          <div className="arrow-main left-arrow" onClick={slidePrev}>
            <img src={ArrowLeft} alt="left arrow" className="arrow" />
          </div>
          {slidesLarge.map((slide, index) => {
            return (
              <img
                key={index}
                src={slide.img}
                alt={slide.description}
                className="slide-image-l"
                ref={slideLargeWidthRef}
              />
            );
          })}
          <div className="arrow-main right-arrow" onClick={slideNext}>
            <img src={ArrowRight} alt="right arrow" className="arrow" />
          </div>
        </div>
        <div className="progress-bar-large">
          {slidesLarge.map((_, index) => {
            return (
              <div
                key={index}
                id={index}
                className={
                  index === currentLargeIndex
                    ? "progress-bar-open"
                    : "progress-bar close"
                }
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slide;

