import { useState } from "react";
import styles from "./LargeSort.module.css";
import { useContext } from "react";

import { sortValueContext } from "../../../App";

function LargeSort() {
  const { sortInputValue, setSortInputValue } = useContext(sortValueContext);
  const [clickedValue, setClickedValue] = useState("popularity");

  function sortClick(e) {
    setSortInputValue(e.currentTarget.dataset.sortValue);
    setClickedValue(e.currentTarget.dataset.sortValue);
  }

  

  return (
    <>
      <div className={styles.sortMain}>
        <div className={styles.sortHeading}>
          <span className={styles.sortOption}>Sort By</span>
        </div>
        <div
          className={`${styles.sortOptions} ${
            clickedValue === "popularity" ? styles.clickedOption : ""
          }`}
          onClick={sortClick}
          data-sort-value="popularity"
        >
          <span
            className={`${styles.sortOption} ${
              clickedValue === "popularity" ? styles.clickedOptionText : ""
            }`}
          >
            Popularity
          </span>
        </div>
        <div
          className={`${styles.sortOptions} ${
            clickedValue === "LowToHigh" ? styles.clickedOption : ""
          }`}
          onClick={sortClick}
          data-sort-value="LowToHigh"
        >
          <span
            className={`${styles.sortOption} ${
              clickedValue === "LowToHigh" ? styles.clickedOptionText : ""
            }`}
          >
            Price -- Low to High
          </span>
        </div>
        <div
          className={`${styles.sortOptions} ${
            clickedValue === "HighToLow" ? styles.clickedOption : ""
          }`}
          onClick={sortClick}
          data-sort-value="HighToLow"
        >
          <span
            className={`${styles.sortOption} ${
              clickedValue === "HighToLow" ? styles.clickedOptionText : ""
            }`}
          >
            Price -- High to Low
          </span>
        </div>
        <div
          className={`${styles.sortOptions} ${
            clickedValue === "Newest" ? styles.clickedOption : ""
          }`}
          onClick={sortClick}
          data-sort-value="Newest"
        >
          <span
            className={`${styles.sortOption} ${
              clickedValue === "Newest" ? styles.clickedOptionText : ""
            }`}
          >
            Newest First
          </span>
        </div>
      </div>
    </>
  );
}

export default LargeSort;
