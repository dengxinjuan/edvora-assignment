import ProductCard from "./ProductCard";
import { useState } from "react";

const LIMIT = 4; // it is the everytime load 4 more

const SingleCategory = ({ category, data }) => {
  const filtedData = data.filter((x) => x.product_name == category);
  //console.log(filtedData);
  const [list, setList] = useState(filtedData.slice(0, LIMIT)); // we set the current list
  const [index, setIndex] = useState(LIMIT);
  const [showMore, setShowMore] = useState(true);
  const LENGTH = Object.keys(filtedData).length;

  /**load more function */
  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = filtedData.slice(index, newIndex);
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  return (
    <div>
      {category}

      <hr />
      <div className="category">
        {list.map((product) => (
          <ProductCard productData={product} />
        ))}
        {showMore && <button onClick={loadMore}>Load More!</button>}
      </div>
    </div>
  );
};

export default SingleCategory;
