import { useEffect, useState, useContext } from "react";
import styles from "./ProductCards.module.css";
import ProductCard from "./ProductCard.jsx";
import { sortValueContext } from "../../../App.jsx";
import { brandFilterValueContext } from "../../../App.jsx";
import { priceFilterValueContext } from "../../../App.jsx";
import { ratingFilterValueContext } from "../../../App.jsx";
import { discountFilterValueContext } from "../../../App.jsx";
import { priceSliderValueContext } from "../../../App.jsx";
import { offerFilterValueContext } from "../../../App.jsx"; 

function ProductCards() {
  const [products, setProducts] = useState([]);

  const { sortInputValue } = useContext(sortValueContext);
  const { brandFilterInputValue } = useContext(brandFilterValueContext);
  const { priceFilterInputValue } = useContext(priceFilterValueContext);
  const { ratingFilterInputValue } = useContext(ratingFilterValueContext);
  const { discountFilterInputValue } = useContext(discountFilterValueContext);
  const { priceFilterSliderInputValue } = useContext(priceSliderValueContext);
  const { offerFilterInputValue } = useContext(offerFilterValueContext); 

  // ✅ Fetch only once
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
  }, []);

  // ✅ Sorting
  const sortedProducts = [...products].sort((a, b) => {
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

  // ✅ Brand Filter
const brandFiltered =
  brandFilterInputValue.length === 0
    ? sortedProducts
    : sortedProducts.filter((product) =>
        brandFilterInputValue.some(
          (brand) =>
            brand.toLowerCase() === product.brandName.toLowerCase()
        )
      );


  // ✅ Offer Filter (OR logic)
  const offerFiltered = brandFiltered.filter((product) => {
  if (offerFilterInputValue.length === 0) return true;

  return offerFilterInputValue.includes(product.offerFilter);
});


  // ✅ Price Filter
const priceValue = Number(priceFilterInputValue);

const priceFiltered = offerFiltered.filter((product) => {

  if (!priceValue) return true;

  if (priceValue === 1000) {
    return product.price <= 1000;
  }

  if (priceValue === 25000) {
    return product.price >= 1001 && product.price <= 25000;
  }

  if (priceValue === 50000) {
    return product.price >= 25001 && product.price <= 50000;
  }

  if (priceValue === 100001) {
    return product.price > 100000;
  }

  return true;
});



  // ✅ Rating Filter
  const ratingFiltered = priceFiltered.filter((product) => {
    if (!ratingFilterInputValue) return true;
    return product.rating >= ratingFilterInputValue;
  });

  // ✅ Discount Filter
  const discountFiltered = ratingFiltered.filter((product) => {
    if (!discountFilterInputValue) return true;
    return product.discountPerc >= discountFilterInputValue;
  });

  // ✅ Price Slider Filter
  const finalProductList = discountFiltered.filter((product) => {
    return (
      product.price >= priceFilterSliderInputValue.minPrice &&
      product.price <= priceFilterSliderInputValue.maxPrice
    );
  });

  return (
    <div className={styles.productMain}>
      {finalProductList.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          brandName={product.brandName}
          offer={product.offer}
          price={product.price}
          realPrice={product.realPrice}
          discountPercentage={product.discountPerc}
          rating={product.rating}
          ratedUsers={product.ratedUsers}
          isSponsored={product.isSponsored}
          productImage={product.image}
          isBestSeller={product.isBestSeller}
          specs={product.specs}
        />
      ))}
    </div>
  );
}

export default ProductCards;
