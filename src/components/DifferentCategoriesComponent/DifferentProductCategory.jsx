import { React } from "react";
import styles from "./DifferentCategories.module.css";
// import GamingConsoles from "./DifferentCategoriesAssets/GamingConsoles.webp";

function DifferentProductCategory(props) {
  return (
    <>
      <div className={styles.Product}>
        <img src={props.image} alt="gamingConsoles" />
        <div>
            <h2>{props.name}</h2>
            <h3>{props.recomendation}</h3>
        </div>
      </div>
    </>
  );
}



export default DifferentProductCategory;

// 6 4 9 9 12