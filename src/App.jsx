/* eslint-disable react-refresh/only-export-components */
import Error from "./components/ErrorComponent/Error.jsx";
import Final from "./components/FinalComponent/Final";
import FilterCategories from "./components/ProductPage/FilterSortComponent/FilterCategoriesComponent/FilterCategories.jsx";
import PFinal from "./components/ProductPage/ProductPageFinal/ProductPageFinal";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const sortValueContext = createContext();
export const brandFilterValueContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const priceFilterValueContext = createContext();
export const ratingFilterValueContext = createContext();
export const discountFilterValueContext = createContext();
export const priceSliderValueContext = createContext();

function App() {
  const [sortInputValue, setSortInputValue] = useState("");
  const [brandFilterInputValue, setBrandFilterInputValue] = useState([]);
  const [priceFilterInputValue, setPriceFilterInputValue] = useState();
  const [ratingFilterInputValue, setRatingFilterInputValue] = useState();
  const [discountFilterInputValue, setDiscountFilterInputValue] = useState();
  const [priceFilterSliderInputValue, setPriceFilterSliderInputValue] =
    useState({ minPrice: 0, maxPrice: 2500 });

  return (
    <>
      <sortValueContext.Provider value={{ sortInputValue, setSortInputValue }}>
        <brandFilterValueContext.Provider
          value={{ brandFilterInputValue, setBrandFilterInputValue }}
        >
          <priceFilterValueContext.Provider
            value={{ priceFilterInputValue, setPriceFilterInputValue }}
          >
            <ratingFilterValueContext.Provider
              value={{ ratingFilterInputValue, setRatingFilterInputValue }}
            >
              <discountFilterValueContext.Provider
                value={{
                  discountFilterInputValue,
                  setDiscountFilterInputValue,
                }}
              >
                <priceSliderValueContext.Provider
                  value={{
                    priceFilterSliderInputValue,
                    setPriceFilterSliderInputValue,
                  }}
                >
                  <Routes>
                    <Route path="/" element={<Final />} />
                    <Route path="productPage" element={<PFinal />}>
                      <Route path="filter" element={<FilterCategories />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                  </Routes>
                </priceSliderValueContext.Provider>
              </discountFilterValueContext.Provider>
            </ratingFilterValueContext.Provider>
          </priceFilterValueContext.Provider>
        </brandFilterValueContext.Provider>
      </sortValueContext.Provider>
    </>
  );
}

export default App;
