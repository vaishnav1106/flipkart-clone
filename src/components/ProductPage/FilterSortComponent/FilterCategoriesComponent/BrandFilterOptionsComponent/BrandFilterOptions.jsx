import styles from "../FilterCategories.module.css";
import search from "../../FilterSortImages/SearchIcon.svg";
import CheckBox from "../CheckBox";
import { useContext } from "react";

import { brandFilterValueContext } from "../../../../../App";

function BrandFilterOptions() {
  const { brandFilterInputValue, setBrandFilterInputValue } =
    useContext(brandFilterValueContext);

  function brandFilterValue(e) {
    let newValue;
    if (e.currentTarget.checked) {
      newValue = e.currentTarget.value;
      setBrandFilterInputValue((prev) => [...prev, newValue]);
    } else {
      newValue = e.currentTarget.value;
      setBrandFilterInputValue((prev) =>
        prev.filter((val) => val != newValue)
      );
    }
  }

  

  return (
    <>
      <div className={styles.brandFilterOptions}>
        <div className={styles.searchSection}>
          <img src={search} alt="search logo" />
          <input type="search" placeholder="Search Brand" />
        </div>
        <div className={styles.brandOptions}>
          <CheckBox name="NIVIA" value="NIVIA" onChange={brandFilterValue} />
          <CheckBox name="COSCO" value="COSCO" onChange={brandFilterValue} />
          <CheckBox name="VECTORX" value="VECTORX" onChange={brandFilterValue} />
          <CheckBox name="RASCO" value="RASCO" onChange={brandFilterValue} />
          <CheckBox name="PUMA" value="PUMA" onChange={brandFilterValue} />
          <CheckBox name="MAYOR" value="MAYOR" onChange={brandFilterValue} />
          <CheckBox name="LatinX" value="LatinX" onChange={brandFilterValue} />
          <CheckBox name="DENOVO" value="DENOVO" onChange={brandFilterValue} />
          <CheckBox name="Dinetic" value="Dinetic" onChange={brandFilterValue} />
          <CheckBox name="ULTIMATE GOAL" value="ULTIMATE GOAL" onChange={brandFilterValue} />
          <CheckBox name="DIBACO SPORTS" value="DIBACO SPORTS" onChange={brandFilterValue} />
          <CheckBox name="BOLDUP" value="BOLDUP" onChange={brandFilterValue} />
          <CheckBox name="YMD" value="YMD" onChange={brandFilterValue} />
          <CheckBox name="NICE" value="NINCE" onChange={brandFilterValue} />
          <CheckBox name="gamers hub" value="gamers hub" onChange={brandFilterValue} />
        </div>
      </div>
    </>
  );
}

export default BrandFilterOptions;
