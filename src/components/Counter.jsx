import React from "react";

const Counter = ({ count, onIncrement, onDecrement, minValue = 0, maxValue = 100 }) => {
  const handleIncrementCounter = () => {
    if (count < maxValue) {
      onIncrement();
    }
  };

  const handleDecrementCounter = () => {
    if (count > minValue) {
      onDecrement();
    }
  };

  return (
    <div className="flex items-center bg-[#fff] rounded-3xl h-[48px] w-32 border-[1px] gap-5 px-2">
      <button className="rounded-full w-8 h-8 bg-slate-200" onClick={handleDecrementCounter}>
        <span className="items-center justify-center">-</span>
      </button>
      <p>{count}</p>
      <button className="rounded-full w-8 h-8 bg-slate-200" onClick={handleIncrementCounter}>
        <span className="items-center justify-center">+</span>
      </button>
    </div>
  );
};

export default Counter;
