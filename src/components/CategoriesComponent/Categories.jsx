import './Categories.css';
import CategoriesCard from './CategoriesCard';
import Fashion from './CategoriesComponentImages/fashion.webp';
import Travel from './CategoriesComponentImages/travelCategory.webp';
import Appliances from './CategoriesComponentImages/appliancesCategory.webp';
import Beauty from './CategoriesComponentImages/beautyCategory.webp';
import Electronics from './CategoriesComponentImages/electronicsCategory.webp';
import Toys from './CategoriesComponentImages/toysCategory.webp';
import SellPhones from './CategoriesComponentImages/sellphonesCategory.webp';
import FlipkartPay from './CategoriesComponentImages/flipkartpayCategory.webp';
import SuperCoin from './CategoriesComponentImages/supercoinCategory.webp';
import Mobiles from './CategoriesComponentImages/mobilesCategory.webp';
import FoodAndHealth from './CategoriesComponentImages/foodandhealthCategory.webp';
import HomeAndKichecn from './CategoriesComponentImages/homeandkitchenCategory.webp';
import AutoAcc from './CategoriesComponentImages/autoaccCategory.webp';
import Furniture from './CategoriesComponentImages/furnitureCategory.webp';
import Sports from './CategoriesComponentImages/sportsCategory.webp';
import GenZTrends from './CategoriesComponentImages/genztrendsCategory.webp';
import NextGen from './CategoriesComponentImages/nextgenCategory.webp';
import { Link } from 'react-router-dom'

const categoriesCardDetails = [
  [
    {
      image: Fashion,
      text: 'Fashion',
      alt: 'Fasion category logo'
    },
    {
      image: Travel,
      text: 'Travel',
      alt: 'Travel category logo'
    },
    {
      image: Appliances,
      text: 'Appliances',
      alt: 'Appliances category logo'
    },
    {
      image: Beauty,
      text: 'Beauty',
      alt: 'Beauty category logo'
    },
    {
      image: Electronics,
      text: 'Electronics',
      alt: 'Electronics category logo'
    },
    {
      image: Toys,
      text: 'Toys, Baby...',
      alt: 'Toys baby category logo'
    },
    {
      image: SellPhones,
      text: 'Sell Phone',
      alt: 'Sell Phone category logo'
    },
    {
      image: FlipkartPay,
      text: 'Flipkart Pay',
      alt: 'Flipkart pay category logo'
    },
    {
      image: SuperCoin,
      text: 'Super Coin',
      alt: 'Supercoin category logo'
    },
  ],
  [
    {
      image: Mobiles,
      text: 'Mobiles',
      alt: 'Mobiles category logo'
    },
    {
      image: FoodAndHealth,
      text: 'Food & Heal...',
      alt: 'food and health category logo'
    },
    {
      image: HomeAndKichecn,
      text: 'Home & Kitc...',
      alt: 'Home and kitchen category logo'
    },
    {
      image: AutoAcc,
      text: 'Auto Acc',
      alt: 'Auto acc category logo'
    },
    {
      image: Furniture,
      text: 'Furniture',
      alt: 'Furniture category logo'
    },
    {
      image: Sports,
      text: 'Sports',
      alt: 'Sports category logo'
    },
    {
      image: GenZTrends,
      text: 'GenZ Trends',
      alt: 'Genz trends category logo'
    },
    {
      image: NextGen,
      text: 'Next Gen',
      alt: 'Next gen category logo'
    },
  ]
];



 function Categories(){
     return (
        <>
          <div className='categories'>
            <div className='categories-top-section categories-section'>
              {categoriesCardDetails[0].map((card, index) => {
                return <Link to='productPage' key={index}><CategoriesCard key={index} img={card.image} text={card.text} alt={card.alt} /></Link>
              })}
            </div>  
            <div className='categories-bottom-section categories-section'>
               {categoriesCardDetails[1].map((card, index) => {
                return <Link to='productPage' key={index}><CategoriesCard key={index} img={card.image} text={card.text} alt={card.alt} /></Link>
              })}
            </div>  
          </div>  
        </>
)}

 export default Categories;
