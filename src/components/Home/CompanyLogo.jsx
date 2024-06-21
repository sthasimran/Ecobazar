import React from "react";
import book from "../../assets/image/book-off.png";
import { default as food, default as group } from "../../assets/image/group.png";
import mangoLogo from "../../assets/image/mango-logo.png";
import series from "../../assets/image/series.png";
import steps from "../../assets/image/steps.png";
function CompanyLogo() {
  return (
    <section className="lg:mx-auto lg:px-28 md:px-10 px-3 mt-9 w-full h-full hidden md:block">
      <div className="flex gap-4 items-center justify-between">
        <div >
          <img src={steps} className="w-[81px] h-[32px] mr-6" />
        </div>
        <div className="border border-grey h-[32px]"></div>
        <div >
          <img src={mangoLogo} className="w-[81px] h-[32px] mr-6" />
        </div>
        <div className="border border-grey h-[32px]"></div>
        <div >
          <img src={food} className="w-[81px] h-[32px] mr-6" />
        </div>
        <div className="border border-grey h-[32px]"></div>
        <div >
          <img src={group} className="w-[81px] h-[32px] mr-6" />
        </div>
        <div className="border border-grey h-[32px]"></div>
        <div>
          <img src={book} className="w-[81px] h-[32px] mr-6" />
        </div>
        <div className="border border-grey h-[32px]"></div>
        <div>
          <img src={series} className="w-[81px] h-[32px] " />
        </div>
      </div>
    </section>
  );
}

export default CompanyLogo;
