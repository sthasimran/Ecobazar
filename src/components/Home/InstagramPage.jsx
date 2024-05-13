import React from "react";
import insta1 from "../../assets/image/Instagram1.png";
import insta2 from "../../assets/image/Instagram2.png";
import insta3 from "../../assets/image/Instagram3.png";
import insta4 from "../../assets/image/Instagram4.png";
import insta5 from "../../assets/image/Instagram5.png";

function InstagramPage() {
  return (
    <section className="md:mx-auto md:px-28 px-3 mt-10">
      <div className="flex items-center justify-center  font-semibold text-xl leading-[38.4px] ">
        Follow us on Instagram
      </div>
      <div className="flex items-center justify-between">
      <img src={insta1} className="w-[200px] h-[200px] rounded" />
      <img src={insta2} className="w-[200px] h-[200px] rounded" />
      <img src={insta3} className="w-[200px] h-[200px] rounded" />
      <img src={insta4} className="w-[200px] h-[200px] rounded" />
      <img src={insta5} className="w-[200px] h-[200px] rounded" />

      </div>
    </section>
  );
}

export default InstagramPage;
