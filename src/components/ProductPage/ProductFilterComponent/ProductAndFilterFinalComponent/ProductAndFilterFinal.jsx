import PDescription from "../../PDescriptionComponent/PDescription";
import ProductCards from "../../ProductCardsSection/ProductCards";
import ProductFilter from "../ProductFilter";
import styles from "./ProductAndFilterFinal.module.css";

function ProductAndFilterFinal() {
  return (
    <>
      <div className={styles.ProductFilterFinal}>
        <ProductFilter />
        <div>
          <PDescription />
          <ProductCards />
        </div>
      </div>
    </>
  );
}

export default ProductAndFilterFinal;
