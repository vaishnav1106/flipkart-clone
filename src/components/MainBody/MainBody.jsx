import Search from "../SearchComponent/SearchProducts";
import Slide from "../SlideshowComponent/SliderShow";
import Categories from "../CategoriesComponent/Categories";
import RandomBox from "../RandomComponent/RandomBox";
import CategoriesLarge from "../CategoriesLargeComponent/CategoriesLarge";
import "./MainBody.css";
import FooterComponent from "../FooterComponent/FooterComponent.jsx";
import DifferentCategories from "../DifferentCategoriesComponent/DifferentCategories.jsx";

function Main() {
  return (
    <>
      <div className="mainbody-main">
        <div className="main-content-section">
          <Search />
          <CategoriesLarge />
          <Slide />
          <Categories />
          <RandomBox />
          <DifferentCategories />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default Main;
