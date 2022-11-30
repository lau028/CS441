import React from "react";
import "./dropdown.css";

function sortName() {}

function SortBy() {
  return (
    <div className="sort-by-menu">
      <select name="sort" id="sort">
        <option value="sortByName">sort by name</option>
        <option value="sortByAmount">sort by amount</option>
        <option value="sortByPrice">sort by price</option>
      </select>
    </div>
  );
}

export default SortBy;