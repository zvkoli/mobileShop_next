import DetailCard from "@/module/DetailCard";

const ProductDetail = ({ product }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-[#242424] py-40 cursor-default uppercase">
      <DetailCard
      product={product}
      />
    </div>
  );
};

export default ProductDetail;