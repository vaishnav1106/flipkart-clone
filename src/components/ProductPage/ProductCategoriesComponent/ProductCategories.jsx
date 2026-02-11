import styles from "./ProductCategories.module.css";
import arrow from "./ProductCategoriesAssets/greyArrow.svg";

function ProductCategories() {

  
  
  return (
    <>
      <div className={styles.productCategoriesMain}>
        <div className={styles.productCategories}>
          <div>
            <h3>Electronics</h3>
            <img src={arrow} className={styles.arrow} alt="" />
          </div>
          <div>
            <h3>TV & Appliances</h3>
            <img src={arrow} className={styles.arrow} alt="" />
          </div>
          <div>
            <h3>Men</h3>
            <img src={arrow} className={styles.arrow} alt="" />
          </div>
          <div>
            <h3>Women</h3>
            <img src={arrow} className={styles.arrow} alt="" />
          </div>
          <div>
            <h3>Baby & Kids</h3>
            <img src={arrow} className={styles.arrow} alt="" />
          </div>
          <div>
            <h3>Home & Furniture</h3>
            <img src={arrow} className={styles.arrow} alt="" />
          </div>
          <div>
            <h3>Sports, Books & More</h3>
            <img src={arrow} className={styles.arrow} alt="" />
          </div>
          <div>
            <h3>Flights</h3>
          </div>
          <div>
            <h3>Offer Zone</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCategories;
