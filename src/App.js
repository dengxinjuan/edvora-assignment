import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SingleCategory from "./SingleCategory";
const BASE_URL = "https://assessment-edvora.herokuapp.com";

function App() {
  const [data, setData] = useState(null);
  const [cafilter, setCafilter] = useState("All"); // this is the product_name filter
  const [theState, setTheState] = useState("All");
  const [theCity, setTheCity] = useState("All");

  // load the original data
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(BASE_URL);

        console.log(data);
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

  //get unique state or city

  function getState(data, name) {
    const array = [];
    for (let x of data) {
      if (x.address[name]) {
        array.push(x.address[name]);
      }
    }
    return new Set(array);
  }

  // call the states and city functions.
  const states = Array.from(getState(data, "state"));
  const cities = Array.from(getState(data, "city"));

  // handle the product_name filter
  const handleChange = (event) => {
    //console.log(event.target.value);
    setCafilter(event.target.value); //display the filter
    // change the original data for the filter, but i am not sure how to go back if filter selected.
    if (event.target.value !== "All") {
      const b = data.filter((item) => item.product_name == event.target.value);
      setData(b);
    }
  };

  //handle the state filter
  const handleState = (event) => {
    setTheState(event.target.value);
    if (event.target.value !== "All") {
      const b = data.filter((item) => item.address.state == event.target.value);
      setData(b);
    }
  };

  // handle the city filter
  const handleCity = (event) => {
    setTheCity(event.target.value);
    if (event.target.value !== "All") {
      const b = data.filter((item) => item.address.city == event.target.value);
      setData(b);
    }
  };

  return (
    <div className="front">
      <div>
        Filters
        <hr />
        <form>
          <label>Products</label>
          <select value={cafilter} onChange={handleChange}>
            <option value="All">All</option>
            {category.map((x) => (
              <option value={x}>{x}</option>
            ))}
          </select>
        </form>
        <form>
          <label>State</label>
          <select value={theState} onChange={handleState}>
            <option value="all">All</option>
            {states.map((x) => (
              <option value={x}>{x}</option>
            ))}
          </select>
        </form>
        <form>
          <label>City</label>
          <select value={theCity} onChange={handleCity}>
            <option value="all">All</option>
            {cities.map((x) => (
              <option value={x}>{x}</option>
            ))}
          </select>
        </form>
      </div>
      <div>
        <h1>Edvora</h1>
        <h2>Product</h2>
        <p>
          {category.map((x) => (
            <p id={x}>
              <SingleCategory category={x} data={data} />
            </p>
          ))}
        </p>
      </div>
    </div>
  );
}

export default App;
