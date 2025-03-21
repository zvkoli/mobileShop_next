import Head from "next/head";
import { useEffect } from "react";
import Slider from "@/templates/Slider";
import Category from "@/templates/Category";
import ProductsList from "@/templates/ProductsList";
import ScrollButton from "@/module/ScrollButton";
import { useDispatch } from "react-redux";
import { setApiData } from "@/features/apiDataSlice";

const Home = ({ data , error }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    data && dispatch(setApiData(data.productsData));
  }, [data, dispatch]);

  if (error) {
    return (
      <div className="w-full h-screen flex flex-row justify-center items-center gap-2 bg-[#242424] text-[#FBCB07] pt-32">
        <h1>خطای در دریافت داده</h1>
        <p>{error}</p>
      </div>
    );
  }

  const partProducts = data.productsData.slice(0, 5);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/" />
      </Head>
      <div className="w-full h-auto flex flex-col justify-start items-center bg-[#242424] pt-32">
        <div className="w-full h-auto flex flex-col justify-end px-5">
          <Slider />
        </div>
        <div className="w-full h-auto py-10">
          <Category />
        </div>
        <div className="w-full h-auto py-10">
          <ProductsList data={partProducts} />
        </div>
        <ScrollButton />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const token = '12345678';
  const res = await fetch(process.env.BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401) {
    return {
      props: {
        data: null,
        error: res.statusText,
      },
    };
  }

  const data = await res.json();
  data.productsData.sort(() => Math.random() - 0.5);

  return {
    props: {
      data,
    },
  };
};
