import { Rating } from "flowbite-react";
import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import c1 from "../../assets/image/c1.png";
import c2 from "../../assets/image/c2.png";
import c3 from "../../assets/image/c3.png";
import quote from "../../assets/image/quote.png";

const data = [
  {
    review: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
    Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
    sodales. Donec sed neque eget`,
    img: c1,
    name: `Robert Fox`,
    type: `Customer`,
    rating: `5`,
    quote: quote,
  },
  {
    review: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
    Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
    sodales. Donec sed neque eget`,
    img: c2,
    name: `Dianne Russell`,
    type: `Customer`,
    rating: `5`,
    quote: quote,
  },
  {
    review: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
    Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
    sodales. Donec sed neque eget`,
    img: c3,
    name: `Eleanor Pena`,
    type: `Customer`,
    rating: `5`,
    quote: quote,
  },
  {
    review: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
    Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
    sodales. Donec sed neque eget`,
    img: c2,
    name: `Dianne Russell`,
    type: `Customer`,
    rating: `5`,
    quote: quote,
  },
];

function ClientTestimonials() {
  const [slider, setSlider] = useState(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // for tablets and up
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="md:mx-auto md:px-28 px-3 mt-3 bg-[#F2F2F2] py-[60px]">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">Client Testimonials</div>

        <div className="slider-buttons items-center justify-center flex gap-2">
          <button onClick={() => slider && slider.slickPrev()}>
            <div className="h-[35px] w-[35px] rounded-full flex items-center justify-center bg-white hover:bg-primary hover:text-white">
              <FaArrowLeftLong size={20} />
            </div>
          </button>
          <button onClick={() => slider && slider.slickNext()}>
            <div className="h-[35px] w-[35px] rounded-full flex items-center justify-center bg-white hover:bg-primary hover:text-white">
              <FaArrowRightLong size={20} />
            </div>
          </button>
        </div>
      </div>
      <div className="slider-container gap-5 mt-3">
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {data.map((item, index) => (
            <div className="border-[1px] p-4 bg-white" key={index}>
              <div>
                <img src={quote} className="w-[32px] h-[26px]" alt="quote" />
              </div>
              <div>{item.review}</div>
              <div className="flex justify-between mt-4">
                <div className="flex gap-2">
                  <div>
                    <img
                      src={item.img}
                      className="w-[56px] h-[56px] rounded-full"
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <p>{item.type}</p>
                  </div>
                </div>
                <div>
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
          ))}
        </Slider>
      </div>
    </section>
  );
}

export { data };
export default ClientTestimonials;
