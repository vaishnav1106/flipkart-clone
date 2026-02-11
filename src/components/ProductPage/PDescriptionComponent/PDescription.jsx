import styles from "./PDescription.module.css";
import { useState } from "react";
import greyArrow from './PDescriptionAssets/greyArrow.svg'
import LargeSort from "../LargeSortComponent/LargeSort";

function PAddSection() {
  const [isCLicked, setIsClicked] = useState(false);

  function readMore() {
    setIsClicked(!isCLicked);
  }

  const footballDescription = `Football is one of the most popular games in the world. It is played in almost 150 countries. The main aim of this game is to score a goal against the opponent team. The team which scores the maximum goals against the other team wins the match. Buying football equipment and football gear is not very difficult. Get the best football equipment online from top brands like Nivia, 
 Vector X, Adidas, Spartan and more at reasonable prices from our store.`;



  return (
    <>
    <div className={styles.pDesciptionMain}>

      <div className={styles.pagePath}>
        <p>Home</p>
        <img src={greyArrow} alt="" />
        <p>Sports</p>
        <img src={greyArrow} alt="" />
        <p>Football</p>
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
        <h1>Football</h1>
        <p>{'(Showing 1-40 prducts of 5,160 products)'}</p>
      </div>
      <LargeSort />
    </div>
    </>
  );
}

export default PAddSection;
