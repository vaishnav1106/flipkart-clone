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
            value="Special Price"
            id="specialPrice"
            onChange={filterValue}
          />
          <label htmlFor="specialPrice">Special Price</label>
        </div>

        <div>
          <input
            type="checkbox"
            value="Buy More,Save More"
            id="buySave"
            onChange={filterValue}
          />
          <label htmlFor="specialPrice">Buy More,Save More</label>
        </div>

        <div>
          <input
            type="checkbox"
            value="No Cost EMI"
            id="emi"
            onChange={filterValue}
          />
          <label htmlFor="specialPrice">No Cost EMI</label>
        </div>
      </div>
    </div>
  );
}

export default OfferFilter;
