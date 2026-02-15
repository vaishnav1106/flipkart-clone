import { useState, useContext } from "react";
import styles from "./OfferFilter.module.css";
import arrow from "../ProductFilterAssets/greyArrow.svg";
import { offerFilterValueContext } from "../../../../App";

function OfferFilter() {
  const [offerClick, setOfferClick] = useState(true);

  const { setOfferFilterInputValue } =
    useContext(offerFilterValueContext);

  function openFilter() {
    setOfferClick(!offerClick);
  }

  function filterValue(e) {
    if (e.currentTarget.checked) {
      // newValue = e.currentTarget.value;
      setOfferFilterInputValue((prev) => [
        ...prev,
        e.currentTarget.value,
      ]);
    } else {
      setOfferFilterInputValue((prev) =>
        prev.filter((val) => val !== e.currentTarget.value)
      );
    }
  }

  return (
    <div className={styles.filterSection}>
      <div className={styles.filterHeading} onClick={openFilter}>
        <h1>OFFERS</h1>
        <img
          src={arrow}
          className={`${styles.arrow} ${
            offerClick ? "" : styles.arrowRotate
          }`}
          alt="arrow"
        />
      </div>

      <div
        className={`${styles.offerList} ${
          offerClick ? styles.hide : ""
        }`}
      >
        <div>
          <input
            type="checkbox"
            value="SpecialPrice"
            id="SpecialPrice"
            onChange={filterValue}
          />
          <label htmlFor="SpecialPrice">Special Price</label>
        </div>

        <div>
          <input
            type="checkbox"
            value="BuyMore"
            id="BuyMore"
            onChange={filterValue}
          />
          <label htmlFor="BuyMore">Buy More,Save More</label>
        </div>

        <div>
          <input
            type="checkbox"
            value="EMI"
            id="EMI"
            onChange={filterValue}
          />
          <label htmlFor="EMI">No Cost EMI</label>
        </div>
      </div>
    </div>
  );
}

export default OfferFilter;
