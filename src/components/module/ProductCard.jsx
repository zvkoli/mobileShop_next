import { PiFileImageLight } from "react-icons/Pi";
import Link from "next/link";
import { useRouter } from "next/router";
import { englishToPersianNumber } from "@/utils/englishToPersianNumber";
import { GoHeart } from "react-icons/go";
import AboutMessage from "./AboutMessage";

const ProductCard = ({ title, price, discount, id }) => {
  const { asPath } = useRouter();
  let pathParts = asPath.split("/").pop() || "";

  if (!isNaN(pathParts)) pathParts = "";

  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price * (1 - discount / 100);
    return englishToPersianNumber(discountedPrice.toFixed(0));
  };

  return (
    <div className="w-[14rem] h-80 flex flex-col justify-start items-center gap-1 bg-[#1A1A1A] rounded-md relative">
      {discount !== 0 && (
        <div className="w-[3rem] h-[3rem] flex flex-row justify-center items-center gap-[0.10rem] text-[#FBCB07] bg-[#242424] rounded-full absolute top-0 left-0 -mt-5 -ml-4 cursor-default border-4 border-[#FBCB07] z-10">
          <span className="text-[0.90rem]">
            {englishToPersianNumber(discount)}
          </span>
          <span className="text-[0.70rem]">%</span>
        </div>
      )}
      <Link
        href={`${pathParts}/${id}`}
        className="w-full h-3/6 flex flex-row justify-center items-center"
      >
        <PiFileImageLight className="w-6/12 h-auto text-[#C3C4C5]" />
      </Link>
      <div className="w-11/12 h-3/6 flex flex-col justify-around items-start cursor-default">
        <h1 className="w-full flex flex-row justify-center items-center text-[0.70rem] text-[#C3C4C5] uppercase">
          {title}
        </h1>
        <div className="w-full flex flex-row justify-between items-center px-1">
          <div className="h-full">
            <p className="flex flex-row items-center gap-1 text-[0.90rem] text-[#C3C4C5]">
              {calculateDiscountedPrice(price, discount)}
              <span className="text-[0.70rem] text-[#C3C4C5]">تومان</span>
            </p>
          </div>
          <div className="h-full text-[#C3C4C5]">
            <button
              className="h-full text-[#FBCB07] text-[1.25rem]"
              onClick={() =>
                AboutMessage({
                  message: "کاربر گرامی این بخش به زودی راه اندازی می شود",
                })
              }
            >
              <GoHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
