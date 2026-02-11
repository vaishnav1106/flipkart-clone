import { useEffect, useState } from "react";
import styles from "./ProductCards.module.css";
import ProductCard from "./ProductCard.jsx";
import { useContext } from "react";
import { sortValueContext } from "../../../App.jsx";
import { brandFilterValueContext } from "../../../App.jsx";
import { priceFilterValueContext } from "../../../App.jsx";
import { ratingFilterValueContext } from "../../../App.jsx";
import { discountFilterValueContext } from "../../../App.jsx";
import { priceSliderValueContext } from "../../../App.jsx";

function ProductCards() {
  const [products, setProducts] = useState([]);
  const { sortInputValue, setSortInputValue } = useContext(sortValueContext);
  const { brandFilterInputValue, setBrandFilterInputValue } = useContext(
    brandFilterValueContext
  );
  const { priceFilterInputValue, setPriceFilterInputValue } = useContext(
    priceFilterValueContext
  );

  const { ratingFilterInputValue, setRatingFilterInputValue } = useContext(
    ratingFilterValueContext
  );

  const { discountFilterInputValue, setDiscountFilterInputValue } = useContext(
    discountFilterValueContext
  );

  const { priceFilterSliderInputValue, setPriceFilterSliderInputValue } =
    useContext(priceSliderValueContext);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("/products.json");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, [
    sortInputValue,
    brandFilterInputValue,
    priceFilterInputValue,
    ratingFilterInputValue,
    discountFilterInputValue,
    priceFilterSliderInputValue,
  ]);

  const sortFilteredFinal = products.sort((a, b) => {
    switch (sortInputValue) {
      case "":
        return b.isBestSeller - a.isBestSeller;
      case "LowToHigh":
        return a.price - b.price;
      case "HighToLow":
        return b.price - a.price;
      case "popularity":
        return b.isBestSeller - a.isBestSeller;
      case "Newest":
        return b.isNewest - a.isNewest;
      default:
        return 0;
    }
  });

  const brandFilteredFinal = sortFilteredFinal.filter((product) => {
    return brandFilterInputValue.includes(product.brandName);
  });

  const productList =
    brandFilterInputValue.length === 0 ? sortFilteredFinal : brandFilteredFinal;

  const priceFilteredFinal = productList.filter((product) => {
    switch (priceFilterInputValue) {
      case 500:
        return product.price < 500;
        break;
      case 1000:
        return product.price >= 501 && product.price <= 1000;
        break;
      case 2500:
        return product.price >= 1001 && product.price <= 2500;
        break;
      case 2501:
        return product.price > 2500;
      default:
        return product;
    }
  });

  const ratingFilteredFinal = priceFilteredFinal.filter((product) => {
    if (ratingFilterInputValue) {
      switch (ratingFilterInputValue) {
        case 4:
          return product.rating >= ratingFilterInputValue;
          break;
        case 3:
          return product.rating >= ratingFilterInputValue;
          break;
        case 2:
          return product.rating >= ratingFilterInputValue;
          break;
        case 1:
          return product.rating >= ratingFilterInputValue;
          break;
        default:
          return product;
      }
    } else {
      return product;
    }
  });

  const discountFilteredFinal = ratingFilteredFinal.filter((product) => {
    if (discountFilterInputValue) {
      switch (discountFilterInputValue) {
        case 70:
          return product.discountPerc >= discountFilterInputValue;
          break;
        case 60:
          return product.discountPerc >= discountFilterInputValue;
          break;
        case 50:
          return product.discountPerc >= discountFilterInputValue;
          break;
        case 40:
          return product.discountPerc >= discountFilterInputValue;
          break;
        case 30:
          return product.discountPerc >= discountFilterInputValue;
          break;
        default:
          return product;
      }
    } else {
      return product;
    }
  });

  const priceSliderFilteredFinal = discountFilteredFinal.filter((product) => {
    return (
      product.price >= priceFilterSliderInputValue.minPrice &&
      product.price <= priceFilterSliderInputValue.maxPrice
    );
  });

  

  const finalProductList = priceSliderFilteredFinal;

  return (
    <>
      <div className={styles.productMain}>
        {finalProductList.map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              brandName={product.brandName}
              price={product.price}
              realPrice={product.realPrice}
              discountPercentage={product.discountPerc}
              rating={product.rating}
              ratedUsers={product.ratedUsers}
              isSponsored={product.isSponsored}
              productImage={product.image}
              isBestSeller={product.isBestSeller}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductCards;
