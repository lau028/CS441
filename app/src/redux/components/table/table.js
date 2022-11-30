import React, { useState, useEffect } from "react";
import { useSortBy } from "react-table";
import Data from "./products";
import "./table.css";

function InventoryTable() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        name: "name",
        amount: "amount",
        price: "price",
      };
      const sortProperty = types[type];
      const sorted = [...Data].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="inventory-table">
      <div className="searchBar">
        <select
          name="sort"
          id="sort"
          onChange={(e) => setSortType(e.target.value)}>
          <option value="sortByName">sort by name</option>
          <option value="sortByAmount">sort by amount</option>
          <option value="sortByPrice">sort by price</option>
        </select>

        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product ID </th>
            <th>Product amount</th>
            <th>Product Price</th>
            <th>EDIT PRODUCT</th>
          </tr>
        </thead>
        <tbody>
          {/*reads in from array/database and creates table as well as filters based on searchbar */}
          {data
            .filter((product) => product.name.toLowerCase().includes(query))
            .map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.id}</td>
                <td>{product.amount}</td>
                <td>{product.price}</td>
                <td>
                  <a href="">EDIT</a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default InventoryTable;