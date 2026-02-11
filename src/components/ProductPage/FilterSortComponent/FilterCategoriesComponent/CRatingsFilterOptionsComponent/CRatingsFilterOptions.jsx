import { React, useContext } from "react";
import styles from "../FilterCategories.module.css";
import CheckBox from "../CheckBox.jsx";
import { ratingFilterValueContext } from "../../../../../App.jsx";

function CRatingsFilterOptions() {
  const { ratingFilterInputValue, setRatingFilterInputValue } = useContext(
    ratingFilterValueContext
  );

  function ratingFilter(e) {
    let ratingValue;
    if (e.currentTarget.checked) {
      ratingValue = Number(e.currentTarget.value);
      setRatingFilterInputValue(ratingValue);
    }
  }

  return (
    <>
      <div className={styles.CRatingsFilterOptions}>
        <CheckBox name="4★ & above" value={4} onChange={ratingFilter} />
        <CheckBox name="3★ & above" value={3} onChange={ratingFilter} />
        <CheckBox name="2★ & above" value={2} onChange={ratingFilter} />
        <CheckBox name="1★ & above" value={1} onChange={ratingFilter} />
      </div>
    </>
  );
}

export default CRatingsFilterOptions;
