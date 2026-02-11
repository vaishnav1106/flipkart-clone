import { useState, createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FilterCategories.module.css";
import arrow from "../FilterSortImages/leftArrow.svg";
import BrandFilterOptions from "./BrandFilterOptionsComponent/BrandFilterOptions";
import CRatingsFilterOptions from "./CRatingsFilterOptionsComponent/CRatingsFilterOptions";
import PriceFilterOptions from "./PriceFilterOptionsComponent/PriceFilterOptions";
import DiscountFilterOptions from "./DiscountFilterOptionsComponent/DiscountFilterOptions";
import FAssuredFilterOption from "./FAssuredFilterComponent/FAssuredFilterOption";
import OffersFilterOptions from "./OffersFilterOptionsComponent/OffersFilterOptions";
import AvailabilityFilterOptions from "./AvailabilityFilterOptionsComponent/AvailabilityFilterOptions";
import GstIAvailableFilterOptions from "./GstIAvailableFilterOptionsComponent/GstIAvailableFilterOptions";
import NewArrivalsFilterOptions from "./NewArrivalsFilterOptionsComponent/NewArrivalsFilterOptions";
import { brandFilterValueContext } from "../../../../App";
import { priceFilterValueContext } from "../../../../App";
import { ratingFilterValueContext } from "../../../../App";
import { discountFilterValueContext } from "../../../../App";

function FilterCategories() {
  const navigate = useNavigate();
  const { brandFilterInputValue, setBrandFilterInputValue } =
    useContext(brandFilterValueContext);
  const {priceFilterInputValue, setPriceFilterInputValue} = useContext(priceFilterValueContext);
  const {ratingFilterInputValue, setRatingFilterInputValue} = useContext(ratingFilterValueContext);
  const {discountFilterInputValue, setDiscountFilterInputValue} = useContext(discountFilterValueContext)

  const [active, setActive] = useState("Brand");

  function brandsClick() {
    setActive("Brand");
  }

  function cRatingClick() {
    setActive("rating");
  }

  function priceClick() {
    setActive("price");
  }

  function discountClick() {
    setActive("discount");
  }

  function assuredClick() {
    setActive("assured");
  }

  function offerClick() {
    setActive("offers");
  }

  function availabilityClick() {
    setActive("availability");
  }

  function gstInvoiceClick() {
    setActive("gstInvoice");
  }

  function newArrivalsClick() {
    setActive("newArrivals");
  }

  function categoryClick() {
    setActive("category");
  }

  useEffect(() => {
    setBrandFilterInputValue([])
    setPriceFilterInputValue('');
    setRatingFilterInputValue('');
    setDiscountFilterInputValue('')
  }, []);

  return (
    <>
      <div className={`${styles.filterPopup} `}>
        <div className={styles.filterPopupHeading}>
          <div onClick={() => navigate(-1)}>
            <img src={arrow} alt="arrow" />
            <h1>Filters</h1>
          </div>
          <span>Clear Filters</span>
        </div>
        <div className={styles.filterPopupMain}>
          <div className={styles.filterPopupCategories}>
            <div
              className={`${styles.popupCategory} ${
                active === "Brand" ? styles.clicked : ""
              } `}
              onClick={brandsClick}
            >
              <p>Brand</p>
            </div>
            <div
              className={`${styles.popupCategory} ${
                active === "rating" ? styles.clicked : ""
              } `}
              onClick={cRatingClick}
            >
              <p>Customer Ratings</p>
            </div>
            <div
              className={`${styles.popupCategory} ${
                active === "price" ? styles.clicked : ""
              } `}
              onClick={priceClick}
            >
              <p>Price</p>
            </div>
            <div
              className={`${styles.popupCategory} ${
                active === "discount" ? styles.clicked : ""
              } `}
              onClick={discountClick}
            >
              <p>Discount</p>
            </div>
            <div
              className={`${styles.popupCategory} ${
                active === "assured" ? styles.clicked : ""
              } `}
              onClick={assuredClick}
            >
              <p>F-Assured</p>
            </div>
            <div
              className={`${styles.popupCategory} ${
                active === "offers" ? styles.clicked : ""
              } `}
              onClick={offerClick}
            >
              <p>Offers</p>
            </div>
            <div
              className={`${styles.popupCategory} ${
                active === "availability" ? styles.clicked : ""
              } `}
              onClick={availabilityClick}
            >
              <p>Availability</p>
            </div>
            <div
              className={`${styles.popupCategory} ${
                active === "gstInvoice" ? styles.clicked : ""
              } `}
              onClick={gstInvoiceClick}
            >
              <p>GST Invoice Available</p>
            </div>
            <div
              className={`${styles.popupCategory} ${
                active === "newArrivals" ? styles.clicked : ""
              } `}
              onClick={newArrivalsClick}
            >
              <p>New Arrivals</p>
            </div>
            <div
              className={`${styles.popupCategory} ${
                active === "category" ? styles.clicked : ""
              } `}
              onClick={categoryClick}
            >
              <p>Category</p>
            </div>
          </div>
          <div className={styles.filterPopupOptions}>
            {active === "Brand" ? <BrandFilterOptions /> : ""}
            {active === "rating" ? <CRatingsFilterOptions /> : ""}
            {active === "price" ? <PriceFilterOptions /> : ""}
            {active === "discount" ? <DiscountFilterOptions /> : ""}
            {active === "assured" ? <FAssuredFilterOption /> : ""}
            {active === "offers" ? <OffersFilterOptions /> : ""}
            {active === "availability" ? <AvailabilityFilterOptions /> : ""}
            {active === "gstInvoice" ? <GstIAvailableFilterOptions /> : ""}
            {active === "newArrivals" ? <NewArrivalsFilterOptions /> : ""}
          </div>
        </div>
        <div className={styles.filterPopupBottom}>
          <div>
            <h3>6,151</h3>
            <p>products found </p>
          </div>
          <button onClick={() => navigate(-1)}>Apply</button>
        </div>
      </div>
    </>
  );
}

export default FilterCategories;
