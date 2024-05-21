import React from "react";

const TagButton = ({ handleClick, value, tag }) => {
  return (
    <section>
      <div className=" ">
        <button
          onClick={handleClick}
          value={value}
          className=" bg-[#F2F2F2] rounded-3xl px-[16px] py-[6px] hover:bg-primary hover:text-white text-sm font-normal"
        >
          {tag}
        </button>
      </div>
    </section>
  );
};

export default TagButton;
