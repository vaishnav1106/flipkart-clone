import { React, useContext, useState } from "react";
import styles from "./CustomerRatings.module.css";
import arrow from "./CustomerRatingsAssets/greyArrow.svg";
import { ratingFilterValueContext } from "../../../../App";

function CustomerRatings() {
  const [cRatingClicked, setCRatingClicked] = useState(true);
  const { ratingFilterInputValue, setRatingFilterInputValue } = useContext(
    ratingFilterValueContext
  );

  function ratingFilter(e) {
    let ratingValue;
    if (e.currentTarget.checked) {
      ratingValue = Number(e.currentTarget.value);
      setRatingFilterInputValue(ratingValue);
    }else {
      setRatingFilterInputValue('')
    }
  }


  function openSection() {
    setCRatingClicked(!cRatingClicked);
    console.log("hello");
  }
  return (
    <>
      <div className={styles.customerRatingsMain}>
        <div className={styles.customerRatingsHeading} onClick={openSection}>
          <h1>CUSTOMER RATINGS</h1>
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
            <input type="checkbox" id="fourStar" value={4} onChange={ratingFilter}/>
            <label htmlFor="fourStar">4★ & above</label>
          </div>
          <div>
            <input type="checkbox" id="threeStar" value={3} onChange={ratingFilter}/>
            <label htmlFor="threeStar">3★ & above</label>
          </div>
          <div>
            <input type="checkbox" id="twoStar" value={2} onChange={ratingFilter}/>
            <label htmlFor="twoStar">2★ & above</label>
          </div>
          <div>
            <input type="checkbox" id="oneStar" value={1} onChange={ratingFilter}/>
            <label htmlFor="oneStar">1★ & above</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerRatings;
