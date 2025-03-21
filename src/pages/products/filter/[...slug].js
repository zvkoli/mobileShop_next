import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ProductsList from "@/templates/ProductsList";
import Spiner from "@/module/Spiner";
import { Empty } from 'antd';
import { useDispatch } from "react-redux";
import { setApiData } from "@/features/apiDataSlice";

const FilterProducts = ({ data }) => {

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    data && dispatch(setApiData(data.productsData));
  }, [data, dispatch]);

  const [minPrice, maxPrice] = router.query.slug ?? [null, null];

  if (!data) {
    return <Spiner />;
  }

  const result = data.productsData.filter(( product ) => {
    const productPrice = parseInt(product.price) || 0;
    return productPrice >= minPrice && productPrice <= maxPrice;
  });
  
  return (
    <>
      <Head>
        <title>&lrm;</title>
        <link rel="icon" href="/" />
      </Head>
      <div className="w-full min-h-screen flex flex-col justify-start items-center bg-[#242424] pt-32 px-5">
        <div className="w-full h-auto py-10">
          {result.length > 0 ? <ProductsList data={result} /> :
          <div className="w-full h-screen flex flex-col justify-start items-center gap-2 bg-[#242424] pt-32 px-5">
            <Empty description={false} />
            <p className="text-[0.70rem] text-[#C3C4C5]">
              چیزی یافت نشد
            </p>
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default FilterProducts;

export const getStaticPaths = async () => {
  
  const res = await fetch(process.env.BASE_URL);
  const data = await res.json();

  const paths = data.productsData.map((product) => ({
    params: {
      slug: [
        product.minPrice ? persianToEnglishNumber(product.minPrice) : "",
        product.maxPrice ? persianToEnglishNumber(product.maxPrice) : "",
      ],
    },
  }));

    return {
      paths,
      fallback: true,
    };
};

export const getStaticProps = async () => {
  
  const res = await fetch(process.env.BASE_URL);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};