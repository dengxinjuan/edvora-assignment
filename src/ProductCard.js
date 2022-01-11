const ProductCard = ({ productData }) => {
  const e = new Date(productData.date);
  const d = e.toLocaleDateString();

  return (
    <div className="product-card">
      <div className="product-block">
        <div>
          <img src={productData.image} alt="image" className="photo" />
        </div>
        <div className="align-product">
          <h3>{productData.product_name}</h3>
          <p>{productData.brand_name}</p>
          <h4>$ {productData.price}</h4>
        </div>
      </div>
      <div className="product-detail">
        <p>
          {productData.address.state},{productData.address.city}
        </p>

        <p style={{ textAlign: "right" }}> {d}</p>
      </div>

      <p style={{ textAlign: "left", paddingLeft: "20px" }}>
        {productData.discription}
      </p>
    </div>
  );
};

export default ProductCard;
