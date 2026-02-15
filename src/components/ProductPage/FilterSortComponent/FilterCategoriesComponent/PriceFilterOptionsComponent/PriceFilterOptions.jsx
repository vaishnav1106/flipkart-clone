import CheckBox from "../CheckBox";
import { useContext } from "react";
import { priceFilterValueContext } from "../../../../../App";

function PriceFilterOptions() {
  const { priceFilterInputValue, setPriceFilterInputValue } =
    useContext(priceFilterValueContext);

  function priceFilter(e) {
    const value = Number(e.currentTarget.value);

    // If already selected → reset
    if (priceFilterInputValue === value) {
      setPriceFilterInputValue("");
      return;
    }

    setPriceFilterInputValue(value);
  }

  return (
    <div>
      <CheckBox
        name="Rs. 1000 and Below"
        value={1000}
        checked={priceFilterInputValue === 1000}
        onChange={priceFilter}
      />

      <CheckBox
        name="Rs. 1001 - Rs. 25000"
        value={25000}
        checked={priceFilterInputValue === 25000}
        onChange={priceFilter}
      />

      <CheckBox
        name="Rs. 25001 - Rs. 50000"
        value={50000}
        checked={priceFilterInputValue === 50000}
        onChange={priceFilter}
      />

      <CheckBox
        name="Rs. 100000 and Above"
        value={100001}
        checked={priceFilterInputValue === 100001}
        onChange={priceFilter}
      />
    </div>
  );
}

export default PriceFilterOptions;
