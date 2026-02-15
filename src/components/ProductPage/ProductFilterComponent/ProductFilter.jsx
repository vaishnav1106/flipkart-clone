import { React, useState } from "react";
import styles from "./ProductFilter.module.css";
import arrow from "./ProductFilterAssets/greyArrow.svg";
import OfferFilter from "./OffersFilterComponent/OfferFilter.jsx"
import BrandFilter from "./BrandFilterComponent/BrandFilter.jsx";
import PriceFilter from "./PriceFilterComponent/PriceFilter.jsx";
import CustomerRatings from "./CustomerRatingsComponent/CustomerRatings.jsx";
import DiscountFilter from "./DiscountFilterComponent/DiscountFilter.jsx";
import assuredLogo from './ProductFilterAssets/FAssured.webp'
import OtherFilter from "./OtherFilterComponent/OtherFilter.jsx";


function ProductFilter() {
  const [isClicked, setIsClicked] = useState(true);

  function openCategories() {
    setIsClicked(!isClicked);
  }


  return (
    <>
      <div className={styles.filterSection}>
        
        <div className={styles.filterHeading}>
          <h1>Filters</h1>
        </div>
        <div className={styles.categories}>
          <h3>CATEGORIES</h3>
          <div className={styles.sportsCategory}>
            <img src={arrow} alt="arrow" />
            <span>Mobiles & Accessories</span>
          </div>
          <div className={styles.footballCategory}>
            <div
              className={styles.footballCategoryHeading}
              onClick={openCategories}
            >
              <span>Mobiles</span>
            </div>
            
          </div>
        </div>
      <OfferFilter />
      <BrandFilter />
      <PriceFilter />
      <CustomerRatings />
      <DiscountFilter />
      <div className={styles.assuredSection}>
        <div className={styles.assuredLogoSection}>
          <input type="checkbox" defaultChecked="checked"/>
          <img src={assuredLogo} alt="" />
        </div>
        <div className={styles.assuredQuestion}>
          <span>?</span>
        </div>
      </div>
      <OtherFilter />
      </div>
    </>
  );
}

export default ProductFilter;
