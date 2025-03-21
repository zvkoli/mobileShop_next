import Head from "next/head";
import { useEffect } from "react";
import ProductsList from "@/templates/ProductsList";
import { useDispatch } from "react-redux";
import { setApiData } from "@/features/apiDataSlice";

const Mobile = ({ data, error, filteredData }) => {
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

  return (
    <>
      <Head>
        <title>موبایل</title>
        <link rel="icon" href="/" />
      </Head>
      <div className="w-full h-screen flex flex-col justify-start items-center bg-[#242424] pt-32 px-5">
        <div className="w-full h-auto py-10">
          <ProductsList data={filteredData} />
        </div>
      </div>
    </>
  );
};

export default Mobile;

export const getStaticProps = async () => {
  const token = "12345678";
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
  const filteredData = data.productsData.filter(
    (item) => item.category === "mobile"
  );

  return {
    props: {
      data,
      filteredData,
    },
  };
};
