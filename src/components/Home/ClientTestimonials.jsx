import React from "react";
import { GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import c1 from "../../assets/image/c1.png";
import c2 from "../../assets/image/c2.png";
import c3 from "../../assets/image/c3.png";
import quote from "../../assets/image/quote.png";
import SimpleSlider from "./Slider";

const data = [
  {
    review: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
    Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
    sodales. Donec sed neque eget`,
    img: c1,
    name: `Robert Fox`,
    type: `Customer`,
    rating: `5`,
    quote: quote ,
  },
  {
    review: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
    Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
    sodales. Donec sed neque eget`,
    img: c2,
    name: `Dianne Russell`,
    type: `Customer`,
    rating: `5`,
    quote: quote ,
  },
  {
    review: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
    Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
    sodales. Donec sed neque eget`,
    img: c3,
    name: `Eleanor Pena`,
    type: `Customer`,
    rating: `5`,
    quote: quote ,
  },
  {
    review: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
    Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
    sodales. Donec sed neque eget`,
    img: c2,
    name: `Dianne Russell`,
    type: `Customer`,
    rating: `5`,
    quote: quote ,
  },
];

function ClientTestimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="md:mx-auto md:px-28 px-3 mt-3">
      <div className="flex justify-between">
        <div className="text-xl font-medium">Client Testimonials</div>
        <div className="flex items-center gap-2 text-primary">
          View All <GoArrowRight />
        </div>
      </div>
      <div>
        <SimpleSlider />
      </div>
    </section>
  );
}
export { data };
export default ClientTestimonials;
