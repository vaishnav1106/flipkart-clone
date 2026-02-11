import { useContext, useState } from "react";
import styles from "./PriceFilter.module.css";
import { priceSliderValueContext } from "../../../../App";

function PriceFilter() {
  const { priceFilterSliderInputValue, setPriceFilterSliderInputValue } =
    useContext(priceSliderValueContext);

  function minPriceChange(e) {
    const value = Number(e.currentTarget.value);
    setPriceFilterSliderInputValue({
      ...priceFilterSliderInputValue,
      minPrice: value,
    });
  }

  function maxpriceChange(e) {
    const value = Number(e.currentTarget.value);
    setPriceFilterSliderInputValue({
      ...priceFilterSliderInputValue,
      maxPrice: value,
    });
  }

  function minPriceSelectChange(e) {
    const priceValue = Number(e.currentTarget.value);
    setPriceFilterSliderInputValue({
      ...priceFilterSliderInputValue,
      minPrice: priceValue,
    });
  }

  function maxPriceSelectChange(e) {
    const priceValue = Number(e.currentTarget.value);
    setPriceFilterSliderInputValue({
      ...priceFilterSliderInputValue,
      maxPrice: priceValue,
    });
  }

  return (
    <>
      <div className={styles.priceFilterSection}>
        <div className={styles.priceHeading}>
          <h1>PRICE</h1>
        </div>
        <div>
          <div className={styles.sliderMain}>
            <div className={styles.priceGraph}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={styles.rangeFill}></div>
            <input
              type="range"
              value={priceFilterSliderInputValue.minPrice}
              min="0"
              max="2500"
              step="50"
              onChange={minPriceChange}
            />
            <input
              type="range"
              value={priceFilterSliderInputValue.maxPrice}
              min="0"
              max="2500"
              step="50"
              onChange={maxpriceChange}
            />
            <div className={styles.priceRangeSteps}>
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
            <div className={styles.minMaxPriceShow}>
              <select onChange={minPriceSelectChange}>
                <option value="0">Min</option>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="2500">2500+</option>
              </select>
              <p>to</p>
              <select defaultValue="2500" onChange={maxPriceSelectChange}>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="2500">2500+</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceFilter;
