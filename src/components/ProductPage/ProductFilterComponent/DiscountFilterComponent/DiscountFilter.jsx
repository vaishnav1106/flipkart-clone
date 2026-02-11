import { useState, useContext } from "react";
import styles from "./DiscountFilter.module.css";
import arrow from "./DiscountFilterAssets/greyArrow.svg";
import { discountFilterValueContext } from "../../../../App";

function DiscountFilter() {
  const [cRatingClicked, setCRatingClicked] = useState(false);
  const {discountFilterInputValue, setDiscountFilterInputValue} = useContext(discountFilterValueContext)

  function discountFilter(e) {
        let discountValue;
        if (e.currentTarget.checked) {
            discountValue = Number(e.currentTarget.value);
            setDiscountFilterInputValue(discountValue)
        }else {
          setDiscountFilterInputValue('')
        }
    }

    

  function openSection() {
    setCRatingClicked(!cRatingClicked);
  }
  return (
    <>
      <div className={styles.customerRatingsMain}>
        <div className={styles.customerRatingsHeading} onClick={openSection}>
          <h1>DISCOUNT</h1>
          <img
            src={arrow}
            className={`${styles.arrow} ${
              cRatingClicked ? styles.rotateArrow : ""
            }`}
            alt="arrow"
          />
        </div>
        <div
          className={`${styles.customerRatingOptions} ${
            cRatingClicked ? "" : styles.hide
          }`}
        >
          <div>
            <input type="checkbox" id="seventyPerc" value={70} onChange={discountFilter}/>
            <label htmlFor="seventyPerc">70% or more</label>
          </div>
          <div>
            <input type="checkbox" id="sixtyPerc" value={60} onChange={discountFilter}/>
            <label htmlFor="sixtyPerc">60% or more</label>
          </div>
          <div>
            <input type="checkbox" id="fiftyPerc" value={50} onChange={discountFilter}/>
            <label htmlFor="fiftyPerc">50% or more</label>
          </div>
          <div>
            <input type="checkbox" id="fourtyPerc" value={40} onChange={discountFilter}/>
            <label htmlFor="fourtyPerc">40% or more</label>
          </div>
          <div>
            <input type="checkbox" id="thirtyPerc" value={30} onChange={discountFilter}/>
            <label htmlFor="thirtyPerc">30% or more</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscountFilter;

