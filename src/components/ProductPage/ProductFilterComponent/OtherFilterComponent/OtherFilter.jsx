import { useState } from "react";
import styles from "./OtherFilter.module.css";
import arrow from "./OtherFilterAssets/greyArrow.svg";

function OtherFilter() {
  const [availabilityClicked, setAvailabilityClicked] = useState(true);
  const [invoiceClicked, setInvoiceClicked] = useState(true);
  const [newArrivalsClicked, setNewArrivalsClicked] = useState(true);

  function openAvailabilityClick() {
    setAvailabilityClicked(!availabilityClicked);
  }

  function openInvoiceClick() {
    setInvoiceClicked(!invoiceClicked);
  }

  function openNewArrivalClick() {
    setNewArrivalsClicked(!newArrivalsClicked);
  }
 
  
  
  return (
    <>
      <div className={styles.availabilityFilter}>
        <div
          className={styles.availabilityFilterHeading}
          onClick={openAvailabilityClick}
        >
          <h1>AVAILABILITY</h1>
          <img
            src={arrow}
            alt="arrow"
            className={`${styles.arrow} ${
              availabilityClicked ? styles.arrowRotate : ""
            }`}
          />
        </div>
        <div
          className={`${styles.options} ${
            availabilityClicked ? styles.close : ""
          }`}
        >
          <input type="checkbox" id="availability" />
          <label htmlFor="availability">Include Out of Stock</label>
        </div>
      </div>
      <div className={styles.availabilityFilter}>
        <div
          className={styles.availabilityFilterHeading}
          onClick={openInvoiceClick}
        >
          <h1>GST INVOICE AVAILABILITY</h1>
          <img
            src={arrow}
            alt="arrow"
            className={`${styles.arrow} ${
              invoiceClicked ? styles.arrowRotate : ""
            }`}
          />
        </div>
        <div
          className={`${styles.options} ${invoiceClicked ? styles.close : ""}`}
        >
          <input type="checkbox" id="GstInvoice" />
          <label htmlFor="GstInvoice">GST Invoice Available</label>
        </div>
      </div>
      <div className={styles.availabilityFilter}>
        <div
          className={styles.availabilityFilterHeading}
          onClick={openNewArrivalClick}
        >
          <h1>NEW ARRIVALS</h1>
          <img
            src={arrow}
            alt="arrow"
            className={`${styles.arrow} ${
              newArrivalsClicked ? styles.arrowRotate : ""
            }`}
          />
        </div>
        <div
          className={`${styles.options} ${
            newArrivalsClicked ? styles.close : ""
          }`}
        >
          <input type="checkbox" id="newArrivals" />
          <label htmlFor="newArrivals">New Arrivals</label>
        </div>
      </div>
    </>
  );
}

export default OtherFilter;
