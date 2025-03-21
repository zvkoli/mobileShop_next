import Head from "next/head";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>404 - صفحه یافت نشد</title>
      </Head>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-4 bg-[#242424] px-5 text-[#C3C4C5] cursor-default">
        <h1 className="text-4xl font-semibold">۴۰۴ خطای</h1>
        <p className="text-lg text-center mb-4">
          صفحه‌ای که به دنبال آن هستید در دسترس نیست !
        </p>
        <Link
          className="text-sm px-6 py-4 rounded-md text-[#FBCB07] bg-[#1A1A1A]"
          href={"/"}
          replace
          aria-label="بازگشت به صفحه اصلی"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
