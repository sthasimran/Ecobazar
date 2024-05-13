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
    <section className="md:mx-auto md:px-28 px-3 mt-10">
      <div className="flex items-center justify-center  font-semibold text-xl leading-[38.4px] ">
        Latest News
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2 ">
        {data.map((item, index) => (
          <div>
            <div className="h-[275px] rounded-md relative">
              <img src={item.img} alt="" />
              <div className="flex flex-col w-[60px] h-[60px] bg-white absolute bottom-3 opacity-80 left-3 items-center justify-center rounded">
                <p>{item.day}</p>
                <p>Jan</p>
              </div>
            </div>
            <div className="border px-4 shadow-md ">
              <div className="flex gap-5 mt-4 leading-9">
                <div className="flex items-center gap-1">
                  <GoTag />
                  Food
                </div>
                <div className="flex items-center gap-1">
                  <FaRegUser />
                  By Admin
                </div>
                <div className="flex items-center gap-1">
                  <FaRegCommentAlt />
                  65 comments
                </div>
              </div>
              <p className="text-green-800 leading-6">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <div className="flex items-center gap-2  text-primary py-2">
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
