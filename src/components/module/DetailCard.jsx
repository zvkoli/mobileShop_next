import { useEffect } from "react";
import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { englishToPersianNumber } from "@/utils/englishToPersianNumber";
import { calculateDiscountedPrice } from "@/utils/calculateDiscountedPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import { removeFromCart } from "@/features/cartSlice";

const DetailCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart])

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getPersianCount = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);
    const count = productInCart ? productInCart.count : 0;
    return count;
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="w-10/12 flex flex-col justify-center items-start gap-2 text-[#C3C4C5]">
      <h1 className="w-full bg-[#1A1A1A] text-[0.90rem] text-[#C3C4C5] p-6 rounded-md">
        {product.title}
      </h1>
      <p className="text-[0.70rem] bg-[#1A1A1A] p-6 rounded-md">
        {showFullDescription
          ? product.description
          : `${product.description.slice(0, 500)} ... `}
        {product.description.length > 500 && (
          <button
            className="text-[#FBCB07] cursor-pointer px-1"
            onClick={toggleDescription}
          >
            {showFullDescription ? "بستن" : "بیشتر"}
          </button>
        )}
      </p>
      <div className="w-full flex flex-row justify-between items-center gap-5 p-3 border-2 border-[#1A1A1A] rounded-md bg-[#FBCB07]">
        <p className="flex flex-row items-center gap-1 text-[0.80rem] text-[#1A1A1A]">
          <span>
            {calculateDiscountedPrice(product.price, product.discount)}
          </span>
          <span>تومان</span>
        </p>
        <div className="flex flex-row items-center gap-1 text-[1.25rem]">
          <button
            onClick={handleAddToCart}
            className="bg-[#242424] text-[#FBCB07] p-3 rounded-lg shadow"
          >
            <IoIosAdd />
          </button>
          <p className="w-[3rem] flex lex-row justify-center items-center text-[#1A1A1A] text-[0.80rem]">
            {englishToPersianNumber(getPersianCount(product.id))}
          </p>
          <button
            onClick={handleRemoveFromCart}
            className="bg-[#242424] text-[#FBCB07] p-3 rounded-lg shadow"
          >
            <IoIosRemove />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
