import ProductCard from "@/module/ProductCard";

const ProductsList = ({ data , selectedModel }) => {

  const filteredProducts = selectedModel
  ? data.filter((product) => product.model === selectedModel)
  : data;

  return (
    <div className="w-full h-auto flex flex-row justify-center items-start flex-wrap gap-2">
      {
        filteredProducts.map(( product ) => {
          return <ProductCard key={product.id} {...product} />
        })
      }
    </div>
  );
}

export default ProductsList;