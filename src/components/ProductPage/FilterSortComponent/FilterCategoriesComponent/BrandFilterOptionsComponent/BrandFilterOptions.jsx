import styles from "../FilterCategories.module.css";
import search from "../../FilterSortImages/SearchIcon.svg";
import CheckBox from "../CheckBox";
import { useContext } from "react";

import { brandFilterValueContext } from "../../../../../App";

function BrandFilterOptions() {
  const { setBrandFilterInputValue } =
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
          <CheckBox name="RealMe" value="RealMe" onChange={brandFilterValue} />
          <CheckBox name="IPHONE" value="IPhone" onChange={brandFilterValue} />
          <CheckBox name="SAMSUNG" value="SAMSUNG" onChange={brandFilterValue} />
          <CheckBox name="REDMI" value="REDMI" onChange={brandFilterValue} />
          <CheckBox name="Ai+" value="Ai+" onChange={brandFilterValue} />
          <CheckBox name="OPPO" value="OPPO" onChange={brandFilterValue} />
          <CheckBox name="HOTLINK" value="HOTLINK" onChange={brandFilterValue} />
          <CheckBox name="VIVO" value="VIVO" onChange={brandFilterValue} />
        </div>
      </div>
    </>
  );
}

export default BrandFilterOptions;
