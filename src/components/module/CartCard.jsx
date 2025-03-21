import { IoIosClose } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { englishToPersianNumber } from "@/utils/englishToPersianNumber";
import { calculateDiscountedPrice } from "@/utils/calculateDiscountedPrice";
import { setCart } from "@/features/cartSlice";

const CartCard = ({ title, price, count, id, discount }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    dispatch(setCart(updatedCart));
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="w-10/12 h-auto flex flex-row justify-center items-center gap-4 bg-[#1A1A1A] rounded-md p-6 text-[#C3C4C5] cursor-default">
      <h1 className="w-8/12 flex flex-row justify-start items-center flex-wrap text-[0.70rem]">
        {title}
      </h1>
      <p className="w-2/12 flex flex-row justify-start items-center text-[0.70rem]">
        {`${calculateDiscountedPrice(price, discount)} تومان`}
      </p>
      <p className="w-1/12 flex flex-row justify-start items-center text-[0.70rem]">
        {`${englishToPersianNumber(count)} عدد`}
      </p>
      <button
        className="w-1/12 flex flex-row justify-end items-center text-[1.5rem] text-[#FBCB07]"
        onClick={() => removeFromCart(id)}
      >
        <IoIosClose />
      </button>
    </div>
  );
};

export default CartCard;
