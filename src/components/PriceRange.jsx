import React, { useState } from "react";

const PriceRange = () => {
  let [minValue, setMinValue] = useState(0);
  let [maxValue, setMaxValue] = useState(1000);
  const updateSlider = (type, value) => {
    const parseValue = parseInt(value);

    if (parseValue > 1000 || parseValue < 0) {
      if (type == "min") {
        setMinValue(0);
        return;
      } else {
        setMaxValue(1000);
      }
      toast.error("Number should be between 1 to 1000", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }

    if (isNaN(parseValue)) return;

    if (type == "min") {
      if (parseValue > maxValue) {
        setMinValue(maxValue);
      } else {
        setMinValue(parseValue);
        return;
      }
      // const newMin = Math.min(parseInt(value), maxValue)
      // setMinValue(newMin)
    } else {
      if (parseValue < minValue) {
        setMaxValue(minValue);
      } else {
        setMaxValue(parseValue);
      }
      // const newMax = Math.max(parseInt(value), minValue)
      // setMaxValue(newMax)
    }
  };

  const minPercent = (minValue / 1000) * 100;
  const maxPercent = (maxValue / 1000) * 100;

  return (
    <>
      <h3 className='font-["Montserrat"] font-bold text-xl'>Price</h3>
      <div className="w-full mt-12">
        <div className="flex justify-between mb-5">
          {/* <span className='border border-[#C3C3C3] rounded-[10px] px-[41px] py-[25px]'>${minValue}</span>
              <span className='border border-[#C3C3C3] rounded-[10px] px-[32px] py-[25px]'>${maxValue}</span> */}
          <div>
            <input
              type="number"
              min="0"
              max="1000"
              step={10}
              value={minValue}
              onChange={(e) => updateSlider("min", e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              min="0"
              max="1000"
              step={10}
              value={maxValue}
              onChange={(e) => updateSlider("max", e.target.value)}
            />
          </div>
        </div>
        <div className="relative w-full h-[2px] bg-[#E8E8E8] rounded">
          <div
            className="absolute h-full bg-red-500 rounded"
            style={{
              left: `${minPercent}%`,
              width: `${
                maxPercent - minPercent > 100 ? 100 : maxPercent - minPercent
              }%`,
            }}
          ></div>
          <input
            type="range"
            min="0"
            max="1000"
            value={minValue}
            step="10"
            onChange={(e) => updateSlider("min", e.target.value)}
            className="absolute w-full h-[2px] bg-transparent pointer-events-none appearance-none"
            style={{ zIndex: 2 }}
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={maxValue}
            step="10"
            onChange={(e) => updateSlider("max", e.target.value)}
            className="absolute w-full h-[2px] bg-transparent pointer-events-none appearance-none"
            style={{ zIndex: 2 }}
          />
        </div>
      </div>
    </>
  );
};

export default PriceRange;
