/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FilterSort.module.css";
import Sort from "./FilterSortImages/sort.svg";
import Filter from "./FilterSortImages/filter.svg";

import { sortValueContext } from "../../../App";

function FilterSort() {
  const [sortClicked, setSortClicked] = useState(false);
  const [categorySelect, setCategorySelect] = useState(false);
  const { sortInputValue, setSortInputValue } = useContext(sortValueContext);

  function click() {
    setSortClicked(!sortClicked);
  }

  function categorySelected() {
    setCategorySelect(!categorySelect);
  }

  function inputChecked(e) {
    setSortInputValue(e.target.value);
    setSortClicked(!sortClicked);
  }


  return (
    <>
      <div className={styles.filterSortMain}>
        <div className={styles.filterSort} onClick={click}>
          <div>
            <img src={Sort} alt="Sort logo" className="sort" />
            <h2>Sort</h2>
          </div>
        </div>
        <div className={styles.middleLine}></div>
        <div className={styles.filterSort} onClick={categorySelected}>
          <Link to="filter">
            <div>
              <span>2</span>
              <img src={Filter} alt="filter lgot" className="filter" />
              <h2>Filter</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className={`${styles.sortPopup} ${sortClicked ? styles.open : ""}`}>
        <div className={styles.sortPopupHeading}>
          <h2>SORT BY</h2>
        </div>
        <div className={styles.sortOptions}>
          <div>
            <label htmlFor="popularity">Popularity</label>
            <input
              type="radio"
              id="popularity"
              name="sort"
              value="popularity"
              defaultChecked
              onChange={inputChecked}
            />
          </div>
          <div>
            <label htmlFor="lowToHigh">Price -- Low to High</label>
            <input
              type="radio"
              id="lowToHigh"
              name="sort"
              value="LowToHigh"
              onChange={inputChecked}
            />
          </div>
          <div>
            <label htmlFor="HighToLow">Price -- High to Low</label>
            <input
              type="radio"
              id="HighToLow"
              name="sort"
              value="HighToLow"
              onChange={inputChecked}
            />
          </div>
          <div>
            <label htmlFor="Newest">Newest First</label>
            <input
              type="radio"
              id="Newest"
              name="sort"
              value="Newest"
              onChange={inputChecked}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSort;

