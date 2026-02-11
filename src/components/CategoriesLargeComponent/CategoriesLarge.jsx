import Minutes from "./CategoriesLargeAssets/minutes.webp";
import Mobiles from "./CategoriesLargeAssets/mobiles.webp";
import Fashion from "./CategoriesLargeAssets/fashion.webp";
import Electronics from "./CategoriesLargeAssets/electronics.webp";
import TvApp from "./CategoriesLargeAssets/tvAppliances.webp";
import HomeFurnitues from "./CategoriesLargeAssets/homeFurnitures.webp";
import Flight from "./CategoriesLargeAssets/flight.webp";
import Beauty from "./CategoriesLargeAssets/beauty.webp";
import Grocery from "./CategoriesLargeAssets/grocery.webp";
import styles from "./CategoriesLarge.module.css";
import ArrowDown from "./CategoriesLargeAssets/Chevron.svg";
import { Link } from "react-router-dom";

const categoriesCardDetails = [
  {
    image: Minutes,
    text: "Minutes",
    alt: "Minutes category logo",
    isPresent: false,
  },
  {
    image: Mobiles,
    text: "Mobiles & Tablets",
    alt: "Mobiles category logo",
    isPresent: false,
  },
  {
    image: Fashion,
    text: "Fashion",
    alt: "Fasion category logo",
    isPresent: true,
  },
  {
    image: Electronics,
    text: "Electronics",
    alt: "Electronics category logo",
    isPresent: true,
  },
  {
    image: TvApp,
    text: "TV & Appliances",
    alt: "Appliances category logo",
    isPresent: false,
  },
  {
    image: HomeFurnitues,
    text: "Home & Furnitures",
    alt: "Home furnitues logo",
    isPresent: true,
  },
  {
    image: Flight,
    text: "Flight Bookings",
    alt: "Flight Bookings logo",
    isPresent: true,
  },
  {
    image: Beauty,
    text: "Beauty, Food..",
    alt: "Beauty Food logo",
    isPresent: true,
  },
  {
    image: Grocery,
    text: "Grocery",
    alt: "Grocery category logo",
    isPresent: false,
  },
];

function CategoriesLarge() {
  return (
    <>
      <div className={styles.main}>
        {categoriesCardDetails.map((c, index) => {
          return (
            <Link to={"productPage"} key={index}>
              <div className={styles.categoriesCard}>
                <img
                  key={index}
                  src={c.image}
                  alt={c.alt}
                  className={styles.catImage}
                />
                <div>
                  <span>{c.text}</span>
                  {c.isPresent ? <img src={ArrowDown} alt="arrow" /> : ""}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.fill}></div>
    </>
  );
}

export default CategoriesLarge;
