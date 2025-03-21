import Head from "next/head";
import { useRouter } from "next/router";
import ProductDetail from "@/templates/ProductDetail";
import Spiner from "@/module/Spiner";

const Product = ({ data, error }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spiner />;
  }

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
        <title>{data.product.title}</title>
        <link rel="icon" href="/" />
      </Head>
      <ProductDetail product={data.product} />
    </>
  );
};

export default Product;

export const getStaticPaths = async () => {
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
  const popularProducts = data.productsData.slice(0, 2);
  const paths = popularProducts.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const productId = params.productId;
  const token = "12345678";

  const res = await fetch(`${process.env.BASE_URL}/${productId}`, {
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

  if (!data.product.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: +process.env.REVALIDATE,
  };
};
