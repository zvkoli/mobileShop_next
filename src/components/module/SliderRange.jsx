import { useState } from "react";
import { Slider, Popover } from "antd";
import { MdOutlineFilterAlt } from "react-icons/md";
import { englishToPersianNumber } from "../../utils/englishToPersianNumber";

const SliderRange = () => {
  const [priceRange, setPriceRange] = useState([18000000, 38000000]);
  const [minPrice, maxPrice] = priceRange;

  const handleChange = (value) => {
    setPriceRange(value);
  };

  const searchHandler = () => {
    window.open(`/products/filter/${minPrice}/${maxPrice}`, "_blank");
  };

  const popoverContent = <div className="text-center w-10">فیلتر</div>;

  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <div className="w-1/12 h-full flex flex-row justify-end items-center">
        <Popover content={popoverContent}>
          <button
            onClick={searchHandler}
            className="w-full h-full flex flex-row justify-center items-center text-[#FBCB07] text-[2rem] cursor-pointer"
          >
            <MdOutlineFilterAlt />
          </button>
        </Popover>
      </div>
      <div className="w-11/12 h-full flex flex-row justify-center items-center gap-2">
        <Slider
          className="w-full"
          range
          value={priceRange}
          onChange={handleChange}
          min={0}
          max={74000000}
          step={5000000}
          valueLabelDisplay="auto"
          tipFormatter={(value) => englishToPersianNumber(value)}
        />
      </div>
    </div>
  );
};

export default SliderRange;
