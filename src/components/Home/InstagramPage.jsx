import React from "react";
import insta1 from "../../assets/image/Instagram1.png";
import insta2 from "../../assets/image/Instagram2.png";
import insta3 from "../../assets/image/Instagram3.png";
import insta4 from "../../assets/image/Instagram4.png";
import insta5 from "../../assets/image/Instagram5.png";

function InstagramPage() {
  return (
    <section className="lg:mx-auto lg:px-28 md:px-10 px-3 mt-10 mb-5">
      <div className="flex items-center justify-center font-semibold text-xl leading-[38.4px] mb-4">
        Follow us on Instagram
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <img src={insta1} className="w-full h-auto rounded" alt="Instagram 1" />
        <img src={insta2} className="w-full h-auto rounded" alt="Instagram 2" />
        <img src={insta3} className="w-full h-auto rounded" alt="Instagram 3" />
        <img src={insta4} className="w-full h-auto rounded" alt="Instagram 4" />
        <img src={insta5} className="w-full h-auto rounded" alt="Instagram 5" />
      </div>
    </section>
  );
}

export default InstagramPage;
