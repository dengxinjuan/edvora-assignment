import ProductCard from "./ProductCard";

const SingleCategory = ({ category, data }) => {
  const filtedData = data.filter((x) => x.product_name == category);
  console.log(filtedData);
  return (
    <div>
      {category}

      <hr />
      {filtedData.map((product) => (
        <ProductCard productData={product} />
      ))}
    </div>
  );
};

export default SingleCategory;
