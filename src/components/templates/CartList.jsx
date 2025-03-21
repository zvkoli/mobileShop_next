import { AiOutlineDelete } from "react-icons/ai";
import { englishToPersianNumber } from "@/utils/englishToPersianNumber";
import CartCard from "@/module/CartCard";
import AboutMessage from "@/module/AboutMessage";
import { useDispatch, useSelector } from "react-redux";

const CartList = ({ data }) => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const clearCart = () => {
    dispatch(setCart([]));
    const emptyCart = [];
    localStorage.setItem('cart', JSON.stringify(emptyCart));
  };

  let totalCount = 0;
  let totalPrice = 0;

  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = (price * (1 - discount / 100));
    return discountedPrice;
  };  
  
  cart.forEach(( product ) => {
    totalCount += product.count;
    const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
    totalPrice += discountedPrice * product.count;;
  });
  
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-2">
      <div className="w-10/12 h-auto flex flex-row justify-center items-center bg-[#1A1A1A] rounded-md p-6 text-[#FBCB07] cursor-default">
        <h1 className="w-8/12 flex flex-row justify-start items-center text-[0.70rem]">
          نام محصول
        </h1>
        <p className="w-2/12 flex flex-row justify-start items-center text-[0.70rem]">
          قیمت
        </p>
        <p className="w-1/12 flex flex-row justify-start items-center text-[0.70rem]">
          تعداد
        </p>
        <div className="w-1/12 flex flex-row justify-end items-center text-[1.25rem] cursor-pointer">
          <button onClick={clearCart}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
      {
        data.map(( product ) => {
          return <CartCard key={product.id} {...product}/>
        })
      }
      <div className="rtl w-10/12 flex flex-row justify-between items-center bg-[#FBCB07] rounded-md p-2 pr-6 text-[#1A1A1A]">
        <div className="flex flex-row justify-start items-center gap-16">
          <div className="flex flex-row justify-start items-center gap-2">
          <p className="text-[0.70rem]">
          تعداد کل کالا ها :
          </p>
          <p className="text-[0.80rem]">
          {englishToPersianNumber(totalCount)}
          </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
          <p className="text-[0.70rem]">
            قیمت کل کالا ها :
          </p>
          <p className="text-[0.80rem]">
            {englishToPersianNumber(totalPrice)}
          </p>
          <p className="text-[0.70rem]">
          تومان
          </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="text-[0.70rem] text-[#FBCB07] bg-[#1A1A1A] py-4 px-8 rounded-md" onClick={AboutMessage}>
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;