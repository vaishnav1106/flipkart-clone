import styles from "./PDescription.module.css";
import { useState } from "react";
import greyArrow from './PDescriptionAssets/greyArrow.svg'
import LargeSort from "../LargeSortComponent/LargeSort";

function PAddSection() {
  const [isCLicked, setIsClicked] = useState(false);

  function readMore() {
    setIsClicked(!isCLicked);
  }

  const footballDescription = `The Hotline Mobiles has 3 Months Manufacture’s Warranty & after Warranty period we would like to help our customers with the best possible service under low expenses`;



  return (
    <>
    <div className={styles.pDesciptionMain}>

      <div className={styles.pagePath}>
        <p>Home</p>
        <img src={greyArrow} alt="" />
        <p>Mobiles & Accessories</p>
        <img src={greyArrow} alt="" />
        <p>Mobiles</p>
      </div>
      <p
        className={`${styles.footballDescription} ${
          isCLicked ? styles.wrapText : ""
        }`}
      >
        {footballDescription}
      </p>
      <span className={styles.ReadMore} onClick={readMore}>
        {isCLicked ? "See less" : "Read more"}
      </span>

      <div className={styles.productCount}>
        <h1>Mobiles</h1>
        <p>{'(Showing 1-40 prducts of 5,160 products)'}</p>
      </div>
      <LargeSort />
    </div>
    </>
  );
}

export default PAddSection;
