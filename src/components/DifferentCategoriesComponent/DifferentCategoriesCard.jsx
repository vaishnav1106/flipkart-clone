import { React } from "react";
import styles from "./DifferentCategories.module.css";
import Arrow from "./DifferentCategoriesAssets/arrow1.svg";
import DifferentProductCategory from "./DifferentProductCategory";
import GamingConsoles from "./DifferentCategoriesAssets/ps.jpeg";
import Watches from "./DifferentCategoriesAssets/watch.png";
import Cameras from "./DifferentCategoriesAssets/camera.jpeg";
import Laptop1 from "./DifferentCategoriesAssets/mobile.jpeg";
import { Link } from "react-router-dom";

function DifferentCategoriesCard(props) {
  return (
    <>
      <Link to="productPage">
      <div className={styles.border}>
        <div className={styles.CategoriesCard}>
          <div className={styles.CategoriesCardHeading}>
            <h1>{props.heading}</h1>
            <div className={styles.arrow}>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className={styles.Categories}>
            <DifferentProductCategory
              image={GamingConsoles}
              name="Gaming Consoles"
              recomendation="In Focus Now"
            />
            <DifferentProductCategory 
              image={Watches}
              name="Wearable Smart Dev.."
              recomendation="Don't Miss"
            />
            <DifferentProductCategory
              image={Cameras}
              name="Cameras"
              recomendation="Best Picks"
            />
            <DifferentProductCategory 
              image={Laptop1}
              name="Affordable Options"
              recomendation="Under 8,999"
            />
          </div>
        </div>
      </div>  
      </Link>
    </>
  );
}

export default DifferentCategoriesCard;


