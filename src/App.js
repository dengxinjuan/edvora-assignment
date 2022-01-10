import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SingleCategory from "./SingleCategory";
const BASE_URL = "https://assessment-edvora.herokuapp.com";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(BASE_URL);

        //console.log(data);
        setData(data);
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, []);

  if (!data) return <div>Loading!</div>;

  //get unique category

  function getCategory(data) {
    const array = [];
    for (let x of data) {
      if (x.product_name) {
        array.push(x.product_name);
      }
    }
    return new Set(array);
  }

  //get the unique category so we display the product
  const category = Array.from(getCategory(data));

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Filters
          <hr />
          <label>Products</label>
          <select>
            <option>All</option>
            {category.map((x) => (
              <option>{x}</option>
            ))}
          </select>
          <label>State</label>
          <label>City</label>
        </div>
        <div>
          <h1>Edvora</h1>
          <h2>Product</h2>
          <h2>
            {category.map((x) => (
              <p id={x}>
                <SingleCategory category={x} data={data} />
              </p>
            ))}
          </h2>
        </div>
      </header>
    </div>
  );
}

export default App;
