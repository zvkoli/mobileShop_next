import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartList from "@/templates/CartList";
import { FaShoppingCart } from "react-icons/fa";
import { setApiData } from "@/features/apiDataSlice";
import { setCart } from "@/redux_toolkit/features/cartSlice";

const Cart = ({ data }) => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(setApiData(data));
  },[data, dispatch])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch(setCart(JSON.parse(savedCart)))
    }
  },[dispatch]);

  return (
    <>
    <Head>
        <title>سبد خرید</title>
        <link rel="icon" href="/" />
    </Head>
    <div className="w-full h-screen flex flex-col justify-start items-center bg-[#242424] pt-32 px-5">
      {
        cart.length > 0 ? (
        <CartList data={cart}/>  
        ) : (
        <div className="flex flex-col justify-start items-center gap-5 pt-20">
          <FaShoppingCart className="text-[#FBCB07] text-[6rem]" />
          <p className="text-[#C3C4C5] text-[0.70rem]">
            سبد خرید شما در حال حاضر خالی است
          </p>
        </div>
        )
      }
    </div>
    </>
  );
}

export default Cart;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/products`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};