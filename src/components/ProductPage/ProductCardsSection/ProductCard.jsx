import styles from "./ProductCards.module.css";
import likeSign from "./PoductCardsAssets/likeSign.svg";
import downArrow from "./PoductCardsAssets/downArrow.svg";
import FillStar from "./PoductCardsAssets/Star.svg";
import EmptyStar from "./PoductCardsAssets/emptyStar.svg";
import WhiteStar from "./PoductCardsAssets/whiteStar.svg";
import FlipAssured from "./PoductCardsAssets/FAssured.webp";
import BlackStar from "./PoductCardsAssets/largetStar.svg";

function ProductCard(props) {
  let starsArray = [];
  let emptyStar = [];
  for (let i = 0; i < Math.floor(props.rating); i++) {
    starsArray[i] = i;
  }

  for (let i = 0; i < 5 - Math.floor(props.rating); i++) {
    emptyStar[i] = i;
  }

  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.productImageSec}>
          <div
            className={`${
              props.isBestSeller ? styles.bestSeller : styles.bestSellerNone
            }`}
          >
            BEST SELLER
          </div>
          <img src={likeSign} className={styles.likeSign} alt="ligh symbol" />
          <img src={BlackStar} className={styles.blackStar} alt="black star" />
          <img
            src={props.productImage}
            className={styles.product}
            alt=" product image"
          />
        </div>
        <div className={styles.productDetailsSec}>
          <span>{props.isSponsored ? "Sponsored" : ""}</span>
          <h3>{props.name}</h3>
          <div className={styles.raingLarge}>
            <div className={styles.ratingBox}>
              <span>{props.rating}</span>
              <img src={WhiteStar} alt="" />
            </div>
            <span>({props.ratedUsers.toLocaleString("en-IN")})</span>
            <img src={FlipAssured} className={styles.assuredLogoLarge} alt="" />
          </div>
          <div className={styles.priceDetailsLarge}>
            <p>₹{props.price.toLocaleString("en-IN")}</p>
            <p>₹{props.realPrice.toLocaleString("en-IN")}</p>
            <p>{props.discountPercentage}% off</p>
          </div>
          <div className={styles.priceDetails}>
            <div className={styles.discountDet}>
              <img
                src={downArrow}
                className={styles.discountArrow}
                alt=" discount arrow"
              />
              <p>{props.discountPercentage}%</p>
            </div>
            <div className={styles.prices}>
              <p>₹{props.realPrice.toLocaleString("en-IN")}</p>
              <p>₹{props.price.toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.dealStatus}>Hot Deal</div>
          <div className={styles.ratingSection}>
            <div className={styles.ratingStars}>
              {starsArray.map((_, index) => {
                return <img key={index} src={FillStar} alt="rating star" />;
              })}
              {emptyStar.map((_, index) => {
                return <img key={index} src={EmptyStar} alt="empty star" />;
              })}
            </div>
            <img
              src={FlipAssured}
              className={styles.assuredLogo}
              alt="asssured logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}



export default ProductCard;

