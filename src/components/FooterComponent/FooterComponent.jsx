import facebook from "./FooterComponentAssets/facebook.svg";
import twitter from "./FooterComponentAssets/twitter.svg";
import youtube from "./FooterComponentAssets/youtube.svg";
import instagram from "./FooterComponentAssets/instagram.svg";
import seller from "./FooterComponentAssets/seller.svg";
import advertise from "./FooterComponentAssets/advertise.svg";
import giftCards from "./FooterComponentAssets/giftcards.svg";
import helpCenter from "./FooterComponentAssets/helpcenter.svg";
import paymentMethods from "./FooterComponentAssets/paymentMethods.svg";
import styles from "./FooterComponent.module.css"



function FooterComponent() {
    return (
        <>
            <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <h3>ABOUT</h3>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Flipkart Stories</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>GROUP COMPANIES</h3>
            <ul>
              <li>
                <a href="#">Myntra</a>
              </li>
              <li>
                <a href="#">Cleartrip</a>
              </li>
              <li>
                <a href="#">Shopsy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>HELP</h3>
            <ul>
              <li>
                <a href="#">Payments</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Cancellation & Returns</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>CONSUMER POLICY</h3>
            <ul>
              <li>
                <a href="#">Cancellatioon & Returns</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="#">Grievance Redressal</a>
              </li>
              <li>
                <a href="#">EPR Compliance</a>
              </li>
              <li>
                <a href="#">FSSAI Food Safety Connect App</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerTopRightOne}>
            <h3>Mail Us:</h3>
            <div>
              <p>Flipkart Internet Private Limited,</p>
              <p>Building Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
            </div>
            <div className={styles.social}>
              <h3>Social</h3>
              <div>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter x" />
                <img src={youtube} alt="youtube" />
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
          <div className={styles.footerTopRightTwo}>
            <h3>Registered Office Address:</h3>
            <div>
              <p>Flipkart Internet Private Limited,</p>
              <p>Building Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
              <p>CIN : U51109KA2012PTC066107</p>
              <p>
                Telephone: <span>044-45614700</span> / <span>044-67415800</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div>
            <img src={seller} alt="seller" className={styles.logo} />
            <h2>Become a Seller</h2>
          </div>
          <div>
            <img src={advertise} alt="advertise" className={styles.logo}/>
            <h2>Advertice</h2>
          </div>
          <div>
            <img src={giftCards} alt="giftCards" className={styles.logo}/>
            <h2>Gift Cards</h2>
          </div>
          <div>
            <img src={helpCenter} alt="help center" className={styles.logo}/>
            <h2>Help Center</h2>
          </div>
          <div>
            <h2>© 2007-2025 Flipkart.com</h2>
          </div>
          <div>
            <img src={paymentMethods} alt="paymentMethods" className={styles.pay} />
          </div>
        </div>
      </footer>
        </>
    );
}

export default FooterComponent;