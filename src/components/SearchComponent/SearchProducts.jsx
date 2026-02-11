import './SearchProducts.css';
import LocationLogo from './SearchComponentIcons/Location.svg'
import RightArrow from './SearchComponentIcons/RightArrow.svg'
import SearchIcon from './SearchComponentIcons/BlueSearchIcon.svg'
 function Search(){
     return (
        <>
            <div className='location-section'>
                <img src={LocationLogo} alt="Location icon" />
                <p>Location not set <span>Select delivery location</span></p>
                <img src={RightArrow} alt="select delivery arrow" />
            </div>

            <div className='search-section'>
                <div className='search-section-main'>
                    <div>
                        <img src={SearchIcon} alt= "search icon"/>
                    </div>
                    <input type="search" placeholder='Search for Products'/>
                </div>
            </div>
        </>
)}



 export default Search;

