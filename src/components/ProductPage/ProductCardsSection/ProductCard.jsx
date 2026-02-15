import styles from "./ProductCards.module.css";
import FillStar from "./PoductCardsAssets/Star.svg";
import likeSign from "./PoductCardsAssets/likeSign.svg";
import EmptyStar from "./PoductCardsAssets/emptyStar.svg";
import WhiteStar from "./PoductCardsAssets/whiteStar.svg";
import FlipAssured from "./PoductCardsAssets/FAssured.webp";
import BlackStar from "./PoductCardsAssets/largetStar.svg";

function ProductCard(props) {
  return (
    <div className={styles.productCard}>
      {/* LEFT IMAGE SECTION */}
      <div className={styles.productImageSec}>
        {props.isBestSeller && (
          <div className={styles.bestSeller}>BEST SELLER</div>
        )}
          <img src={likeSign} className={styles.likeSign} alt="ligh symbol" />

        <img
          src={props.productImage}
          className={styles.product}
          alt="product"
        />
      </div>

      {/* MIDDLE DETAILS SECTION */}
      <div className={styles.productDetailsSec}>
        {props.isSponsored && (
          <span className={styles.sponsored}>Sponsored</span>
        )}

        <h3 className={styles.productTitle}>{props.name}</h3>

        <div className={styles.ratingRow}>
          <div className={styles.ratingBox}>
            <span>{props.rating}</span>
            <img src={WhiteStar} alt="star" />
          </div>

          <span className={styles.ratedUsers}>
            {props.ratedUsers.toLocaleString("en-IN")} Ratings
          </span>
        </div>
        <div className="specsList">
          <ul className={styles.specList}>
            {props.specs &&
              Object.entries(props.specs).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
          </ul>
        </div>
      </div>

      {/* RIGHT PRICE SECTION */}
      <div className={styles.priceSection}>
        <p className={styles.mainPrice}>
          ₹{props.price.toLocaleString("en-IN")}{" "}
          <img src={FlipAssured} className={styles.assuredLogo} alt="assured" />
        </p>

        <div className={styles.priceRow}>
          <span className={styles.realPrice}>
            ₹{props.realPrice.toLocaleString("en-IN")}
          </span>
          <span className={styles.discount}>
            {props.discountPercentage}% off
          </span>
        </div>

        {/* <img src={FlipAssured} className={styles.assuredLogo} alt="assured" /> */}
      </div>
    </div>
  );
}

export default ProductCard;
