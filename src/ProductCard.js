const ProductCard = ({ productData }) => {
  const e = new Date(productData.date);
  const d = e.toLocaleDateString();

  return (
    <div>
      <p>{productData.product_name}</p>
      <p>Brand Name: {productData.brand_name}</p>
      <p>Price: {productData.price}</p>
      <p>
        Location:
        {productData.address.state}---
        {productData.address.city}
      </p>
      {d}

      <img src={productData.image} alt="image" className="photo" />

      <p>{productData.discription}</p>
    </div>
  );
};

export default ProductCard;
