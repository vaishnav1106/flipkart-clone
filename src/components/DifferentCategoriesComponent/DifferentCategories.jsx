import { React } from "react";
import styles from "./DifferentCategories.module.css";
import DifferentCategoriesCard from "./DifferentCategoriesCard";

function DifferentCategories() {
  return (
    <>
      <div className={styles.CardMain}>
        <DifferentCategoriesCard heading="Best quality" />
        <DifferentCategoriesCard heading="Top Selection" />
        <DifferentCategoriesCard heading="Top Rated" />
      </div>
    </>
  );
}

export default DifferentCategories;
