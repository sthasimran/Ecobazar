import { Rating } from "flowbite-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { data } from "../Home/ClientTestimonials";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="border  p-4">
              <div>
                <img src={item.quote} className="w-[32px] h-[26px]" />
              </div>
              <div>
                <p>{item.review}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <img src={item.img} className="h-28 w-28 rounded-full" />
                  </div>
                  <div className="flex flex-col">
                    <div>{item.name}</div>
                    <div>{item.type}</div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <Rating className="">
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                    </Rating>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
