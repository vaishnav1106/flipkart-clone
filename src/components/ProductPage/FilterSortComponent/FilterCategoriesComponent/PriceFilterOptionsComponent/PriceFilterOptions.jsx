import CheckBox from "../CheckBox";
import { useContext } from "react";

import { priceFilterValueContext } from "../../../../../App";

function PriceFilterOptions() {
  const { priceFilterInputValue, setPriceFilterInputValue } = useContext(
    priceFilterValueContext
  );

  // function priceFilter(e) {
  //   let newPriceValue;
  //   if (e.currentTarget.checked) {
  //     newPriceValue = e.currentTarget.value;
  //     setPriceFilterInputValue((prev) => [...prev, newPriceValue]);
  //   } else {
  //     newPriceValue = e.currentTarget.value;
  //     setPriceFilterInputValue((prev) =>
  //       prev.filter((val) => val != newPriceValue)
  //     );
  //   }
  // }

  function priceFilter(e) {
    let newPriceValue;
    if (e.currentTarget.checked) {
      newPriceValue = Number(e.currentTarget.value);
      setPriceFilterInputValue(newPriceValue)
    }
  }


  return (
    <>
      <div>
        <CheckBox
          name="Rs. 500 and Below"
          value= {500} 
          onChange={priceFilter}
        />
        <CheckBox
          name="Rs. 501 - Rs. 1000"
          value={1000}
          onChange={priceFilter}
        />
        <CheckBox
          name="Rs. 1001 - Rs. 2500"
          value={2500}
          onChange={priceFilter}
        />
        <CheckBox
          name="Rs. 2501 - Rs. Above"
          value={2501}
          onChange={priceFilter}
        />
      </div>
    </>
  );
}

export default PriceFilterOptions;
