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

        {showMore && (
          <button onClick={loadMore} className="loadMore">
            <svg
              width="20"
              height="43"
              viewBox="0 0 20 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_230)">
                <path
                  d="M5 1L15 17.5L5 34"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_230"
                  x="-0.00012207"
                  y="-0.000144958"
                  width="20.0001"
                  height="43.0003"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_230"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_230"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleCategory;
