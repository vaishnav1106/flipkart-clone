import { useState, useContext, useInsertionEffect } from "react";
import styles from "./BrandFilter.module.css";
import arrow from "../ProductFilterAssets/greyArrow.svg";
import search from "./BrandFIlterAssets/Search.svg";

import { brandFilterValueContext } from "../../../../App";

function BrandFilter() {
  const [brandClick, setBrandClick] = useState(true);

  const { brandFilterInputValue, setBrandFilterInputValue } =
    useContext(brandFilterValueContext);

  function openFilter() {
    setBrandClick(!brandClick);
  }

  function filterValue(e) {
    let newValue;
    if (e.currentTarget.checked) {
      newValue = e.currentTarget.value;
      setBrandFilterInputValue((prev) => [...prev, newValue]);
    } else {
      setBrandFilterInputValue((prev) =>
        prev.filter((val) => val != e.currentTarget.value)
      );
    }
  }

  

  return (
    <>
      <div className={styles.filterSection}>
        <div className={styles.filterHeading} onClick={openFilter}>
          <h1>BRAND</h1>
          <img
            src={arrow}
            className={`${styles.arrow} ${
              brandClick ? "" : styles.arrowRotate
            }`}
            alt="arrow"
          />
        </div>
        <div>
          <div
            className={`${styles.brandList} ${brandClick ? styles.hide : ""}`}
          >
            <div className={styles.brandSearch}>
              <img src={search} alt="" />
              <input type="search" placeholder="Search Brand" />
            </div>
            <div>
              <input
                type="checkbox"
                value="NIVIA"
                id="NIVIA"
                onChange={filterValue}
              />
              <label htmlFor="NIVIA">NIVIA</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="COSCO"
                id="COSCO"
                onChange={filterValue}
              />
              <label htmlFor="COSCO">COSCO</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="VECTORX"
                id="VECTOR X"
                onChange={filterValue}
              />
              <label htmlFor="VECTOR X">VECTOR X</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="RASCO"
                id="RASCO"
                onChange={filterValue}
              />
              <label htmlFor="RASCO">RASCO</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="LatinX"
                id="LatinX"
                onChange={filterValue}
              />
              <label htmlFor="LatinX">LATIN X</label>
            </div>
            <p>605 MORE</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandFilter;
