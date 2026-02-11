import PHeader from "../PHeaderComponent/PHeader";
import FilterSort from "../FilterSortComponent/FilterSort";
import FilterButtons from "../FilterButtonsComponent/FilterButtons";
import PHeaderLarge from "../PHeaderLargeComponent/PHeaderLarge";
import ProductAndFilterFinal from "../ProductFilterComponent/ProductAndFilterFinalComponent/ProductAndFilterFinal";
import ProductPageFooter from "../ProductPageFooterComponent/ProductPageFooter";
import ProductCategories from "../ProductCategoriesComponent/ProductCategories";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

function PFinal() {
  return (
    <>
      <PHeader />
      <PHeaderLarge />
      <FilterSort />
      <FilterButtons />
      <ProductCategories />
      <ProductAndFilterFinal />
      <ProductPageFooter />
      <Outlet />
    </>
  );
}

export default PFinal;
