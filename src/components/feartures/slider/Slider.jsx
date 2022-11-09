import React from "react";
import Slider from "react-slick";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.png";
import slider3 from "../../../assets/images/slider3.png";
import "../slider/slider.scss";
const sliders = [
  {
    id: 1,
    urlImage: slider1,
  },
  {
    id: 2,
    urlImage: slider2,
  },
  {
    id: 3,
    urlImage: slider3,
  },
];

export default function SliderPage() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 5000,
    // autoplaySpeed: 5000,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {sliders.map((item) => (
          <div className="slider__item" key={item.id}>
            <img src={item.urlImage} alt="slider" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
