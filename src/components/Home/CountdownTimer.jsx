import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center items-center gap-4 sm:px-4 mt-2 ">
      <div className="flex ">
        <div className="flex flex-col justify-center items-center ">
          <span className=" flex justify-center items-center  text-[24px] md:text-[20px] lg:text-[24px] font-medium rounded-md">
            {timeLeft?.days}
          </span>
          <span className=" text-[12px] md:text-[11px] lg:text-[12px] font-medium ">
            {timeLeft?.days == 1 ? "Day" : "Days"}
          </span>
        </div>
        <div>
          <p>:</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center items-center ">
          <span className="flex justify-center items-center  text-[24px] md:text-[20px] lg:text-[24px]  font-medium rounded-md">
            {timeLeft?.hours}
          </span>
          <span className="text-[12px] md:text-[11px] lg:text-[12px]  font-medium">
            {timeLeft?.hours == 1 ? "Hour" : "Hours"}
          </span>
        </div>
        <div>
          <p>:</p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col justify-center items-center">
          <span className="flex justify-center items-center  text-[24px] md:text-[20px] lg:text-[24px]  font-medium rounded-md">
            {timeLeft?.minutes}
          </span>
          <span className="text-[12px] md:text-[11px] lg:text-[12px]  font-medium">
            {timeLeft?.minutes == 1 ? "Minute" : "Minutes"}
          </span>
        </div>
        <div>
          <p>:</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="flex justify-center items-center  text-[24px] md:text-[20px] lg:text-[24px]  font-medium rounded-md">
          {timeLeft?.seconds}
        </span>
        <span className="text-[12px] md:text-[11px] lg:text-[12px] font-medium">
          {timeLeft?.seconds == 1 ? "Second" : "Seconds"}
        </span>
      </div>
    </div>

    // <div className="flex items-center justify-center mt-10">
    //   <div className="flex flex-col items-center">
    //     <div className="text-xl md:text-xl font-semibold text-center">
    //       {timeLeft.days}
    //       <span className="text-xl md:text-xl">days</span>
    //     </div>
    //     <div className="text-xl md:text-xl font-semibold text-center">
    //       {timeLeft.hours}
    //       <span className="text-xl md:text-xl">hours</span>
    //     </div>
    //     <div className="text-xl md:text-xl font-semibold text-center">
    //       {timeLeft.minutes}
    //       <span className="text-xl md:text-xl">minutes</span>
    //     </div>
    //     <div className="text-xl md:text-xl font-semibold text-center">
    //       {timeLeft.seconds}
    //       <span className="text-xl md:text-xl">seconds</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CountdownTimer;
