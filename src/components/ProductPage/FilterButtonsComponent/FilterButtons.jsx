import Premium from './FilterButtonsImages/premium.webp';
import TopRated from './FilterButtonsImages/topRated.webp';
import Discount from './FilterButtonsImages/discount.webp';
import './FilterButtons.css';

 function FilterButtons(){

     return (
     
        

        <>
            <div className='filter-buttons-main'>
                <div className='filter-button'>
                    <img src={Premium} alt="Premium Brands logo"/>
                    <span>Premium Brands</span>
                </div>
                <div className='filter-button'>
                    <img src={TopRated} alt="Premium Brands logo"/>
                    <span>Top Rated</span>
                </div>
                <div className='filter-button'>
                    <img src={Discount} alt="Premium Brands logo"/>
                    <span>50% or more</span>
                </div>
            </div>            
        </>

)}

  

 export default FilterButtons;