import Head from "next/head";
import { useEffect, useState } from "react";
import ProductsList from "@/templates/ProductsList";
import SliderRange from "@/module/SliderRange";
import SelectModelProduct from "@/module/SelectModelProduct";
import { useDispatch } from "react-redux";
import { setApiData } from "@/features/apiDataSlice";

const Products = ({ data, error }) => {
  const dispatch = useDispatch();
  const [selectedModel, setSelectedModel] = useState("");

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

  return (
    <>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/" />
      </Head>
      <div className="w-full h-auto flex flex-col justify-start items-center bg-[#242424] pt-32 px-5">
        <div className="w-11/12 h-full flex flex-row justify-between items-center px-8 pt-2">
          <div className="w-4/12 h-full flex flex-row justify-start items-center">
            <SelectModelProduct setSelectedModel={setSelectedModel} />
          </div>
          <div className="w-8/12 h-full flex flex-row justify-start items-center">
            <SliderRange />
          </div>
        </div>
        <div className="w-full min-h-screen py-10">
          <ProductsList
            data={data.productsData}
            selectedModel={selectedModel}
          />
        </div>
      </div>
    </>
  );
};

export default Products;

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

  return {
    props: {
      data,
    },
  };
};
