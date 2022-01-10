const SingleCategory = ({ category, data }) => {
  const filtedData = data.filter((x) => x.product_name == category);
  console.log(filtedData);
  return (
    <div>
      {category}

      <hr />
      {filtedData[0].brand_name}
    </div>
  );
};

export default SingleCategory;
