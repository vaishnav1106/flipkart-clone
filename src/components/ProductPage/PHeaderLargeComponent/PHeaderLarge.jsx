import "./PHeaderLarge.css";
import FlipkartLogo from "./PHeaderLargeAssets/FlipkartLogo.png";
import PlusLogo from "./PHeaderLargeAssets/Plus.png";
import SearchIcon from "./PHeaderLargeAssets/SearchIcon.svg";
import ArrowDown from "./PHeaderLargeAssets/arrowDown.svg";
import Cart from './PHeaderLargeAssets/CartLogo.svg';



function PHeaderLarge() {
  return (
    <>
      <div className="p-header-large">
        <div className="p-header-large-main">
          <div className="p-header-large-left">
            <div className="flipkart-logo-section">
              <img
                src={FlipkartLogo}
                className="flipkart-logo"
                alt="flipkart logo image"
              />
              <div>
                <p>
                  Explore <span>Plus</span>
                </p>
                <img
                  src={PlusLogo}
                  alt="plus logo image"
                  className="plus-logo"
                />
              </div>
            </div>
            <div className="large-search-section">
              <div className="l-search-main">
                <input
                  type="search"
                  placeholder="Search for products, brands and more"
                />
                <img src={SearchIcon} alt="search icom" />
              </div>
            </div>
          </div>
          <div className="p-header-large-right">
            <button className="p-header-large-btn">Login</button>
            <div>
              <span>Become a seller</span>
            </div>
            <div>
              <span>More</span>
              <img src={ArrowDown} className="arrow-down" alt="down arrow" />
            </div>
            <div>
              <img src={Cart} className="cart-logo" alt="cart logo" />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default PHeaderLarge;
