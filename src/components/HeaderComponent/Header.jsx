import './header.css';
import HamLogo from './HeaderLogos/Menu.svg';
import FlipLogo from './HeaderLogos/FlipkartLogo.svg';
import GetAppLogo from './HeaderLogos/Get App.svg';
import LoginLogo from './HeaderLogos/Login.svg';
import CartLogo from './HeaderLogos/Cart.svg';
import SellerLogo from './HeaderLogos/Become a Seller.svg';
import DropdownLogo from './HeaderLogos/Dropdown.svg';
import SearchIcon from './HeaderLogos/SearchIcon.svg';



 function Header(){
     return (
        <>
            <header className='header'>
                <div className='header-main'>
                    <div className='header-left-section'>
                    <div className='hamburger'>
                        <img src={HamLogo} alt="hamburger logo icom" />
                    </div>
                    <div className='flip-logo'>
                        <img src={FlipLogo} alt=" flipkart logo" />
                    </div>
                    <div>
                        <div className='search-main'>
                            <button>
                                <img src={SearchIcon} alt="header search logo icon" />
                            </button>
                            <div>
                                <input className='search-bar' type="text" placeholder='Search for Products, Brands and More' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-right-section'>
                    <div>
                        <img src={GetAppLogo} className="get-app-logo" alt="get app logo icon" />
                    </div>
                    <div>
                        <img src={LoginLogo} className='login-logo' alt="login icon" />
                        <span>Login</span>
                        <svg  xmlnsXlink="http://www.w3.org/1999/xlink" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_4974_75969)"><path d="M3 2L7 6L11 2" stroke="#111112" strokeWidth="1.5" strokeLinecap="round"></path></g><defs><filter id="filter0_d_4974_75969" x="0.25" y="0.25" width="13.5" height="9.8125" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4974_75969"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4974_75969" result="shape"></feBlend></filter></defs></svg>
                    </div>
                    <div>
                        <img src={CartLogo} className='cart-logo' alt="cart icon" />
                        <span>Cart</span>
                    </div>
                    <div>
                        <img src={SellerLogo} alt="become a seller icon" />
                        <span>Become a Seller</span>
                    </div>
                    <div className='drop-down-main'>
                        <img src={DropdownLogo} alt="dropdown logo" />
                    </div>
                </div>
                </div>
            </header>
        </>
)}



 export default Header;