import { useState, useContext } from "react";
import styles from "./BrandFilter.module.css";
import arrow from "../ProductFilterAssets/greyArrow.svg";
import search from "./BrandFIlterAssets/Search.svg";
import { brandFilterValueContext } from "../../../../App";

function BrandFilter() {
  const [brandClick, setBrandClick] = useState(true);

  const { setBrandFilterInputValue } =
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
                value="RealMe"
                id="RealMe"
                onChange={filterValue}
              />
              <label htmlFor="RealMe">RealMe</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="IPhone"
                id="IPhone"
                onChange={filterValue}
              />
              <label htmlFor="IPhone">IPhone</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="SAMSUNG"
                id="SAMSUNG"
                onChange={filterValue}
              />
              <label htmlFor="SAMSUNG">SAMSUNG</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="REDMI"
                id="REDMI"
                onChange={filterValue}
              />
              <label htmlFor="REDMI">REDMI</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Ai+"
                id="Ai+"
                onChange={filterValue}
              />
              <label htmlFor="Ai+">Ai+</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="OPPO"
                id="OPPO"
                onChange={filterValue}
              />
              <label htmlFor="OPPO">OPPO</label>
            </div>
             <div>
              <input
                type="checkbox"
                value="HOTLINE"
                id="HOTLINE"
                onChange={filterValue}
              />
              <label htmlFor="HOTLINE">HOTLINE</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="VIVO"
                id="VIVO"
                onChange={filterValue}
              />
              <label htmlFor="VIVO">VIVO</label>
            </div>
            <p>100+ MORE</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandFilter;



