import React from "react";
import { FaRegCommentAlt, FaRegUser } from "react-icons/fa";
import { GoArrowRight, GoTag } from "react-icons/go";
import img1 from "../../assets/image/egg-bg.png";
import img2 from "../../assets/image/orange-bg.png";
import img3 from "../../assets/image/salad-bg.png";

const data = [
  {
    day: `18`,
    month: `Nov`,
    category: `Food`,
    type: `By Admin`,
    comments: `65 comments`,
    title: `Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum`,
    img: img1,
  },
  {
    day: `29`,
    month: `Jun`,
    category: `Food`,
    type: `By Admin`,
    comments: `65 comments`,
    title: `Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum`,
    img: img2,
  },
  {
    day: `23`,
    month: `Dec`,
    category: `Food`,
    type: `By Admin`,
    comments: `65 comments`,
    title: `Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum`,
    img: img3,
  },
];

function LatestNews() {
  return (
    <section className="lg:mx-auto lg:px-28 md:px-10 px-3 mt-10">
      <div className="flex items-center justify-center font-semibold text-xl leading-[38.4px]">
        Latest News
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-2 ">
        {data.map((item, index) => (
          <div key={index}>
            <div className="lg:h-[275px] rounded-md relative">
              <img src={item.img} alt="" />
              <div className="md:flex flex-col md:w-[50px] lg:w-[70px] lg:h-[60px] md:h-[40px] bg-white absolute bottom-3 left-3 items-center justify-center rounded opacity-60 hidden">
                <p className="lg:text-xs md:text-[12px]">{item.day}</p>
                <p className="lg:text-xs md:text-[12px]">{item.month}</p>
              </div>
            </div>
            <div className="border px-4 shadow-md">
              <div className="  hidden md:flex lg:flex-row md:flex-col md:gap-1 lg:gap-5 lg:mt-4 mt-2 lg:leading-9 text-[14px] md:leading-6 news-content">
                <div className="flex items-center gap-1 ">
                  <GoTag />
                  {item.category}
                </div>
                <div className="flex items-center gap-1">
                  <FaRegUser />
                  {item.type}
                </div>
                <div className="flex items-center gap-1">
                  <FaRegCommentAlt />
                  {item.comments}
                </div>
              </div>
              <p className="text-green-800 lg:leading-6 md:text-[15px] lg:text-[16px] mt-2">{item.title}</p>
              <div className="flex items-center gap-2 text-primary py-2">
                <button className="">Read More </button>
                <GoArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestNews;
