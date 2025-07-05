import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  let handleClick = (type) => {
    if (type == "minus") {
      if (count > 0) {
        count--;
        setCount(count);
      }
    } else {
      count++;
      setCount(count);
    }
  };
  return (
    <div className="flex">
      <button className="cursor-pointer" onClick={() => handleClick("minus")}>-</button>
      <input
        className="w-[30px] h-[30px] bg-[#ddd] text-center rounded-full mx-6"
        type="text"
        value={count}
      />
      <button className="cursor-pointer" onClick={() => handleClick("plus")}>+</button>
    </div>
  );
};

export default Counter;
