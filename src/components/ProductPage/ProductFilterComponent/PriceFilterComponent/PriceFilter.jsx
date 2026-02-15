import { useContext } from "react";
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
              max="200000"
              step="50"
              onChange={minPriceChange}
            />
            <input
              type="range"
              value={priceFilterSliderInputValue.maxPrice}
              min="0"
              max="200000"
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
                <option value="1000">1000</option>
                <option value="10000">10000</option>
                <option value="25000">25000</option>
                <option value="100000">100000+</option>
              </select>
              <p>to</p>
              <select defaultValue="250000" onChange={maxPriceSelectChange}>
                <option value="25000">25000</option>
                <option value ="45000">45000</option>
                <option value="50000">50000</option>
                <option value="100000">100000+</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceFilter;
