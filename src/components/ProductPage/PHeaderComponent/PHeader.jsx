import './PHeader.css';
import LeftArrow from './PHeaderImages/leftArrow.svg';
import FlipLogo from './PHeaderImages/FlipLogo.png';
import Search from './PHeaderImages/Search.svg';
import Cart from './PHeaderImages/cart.svg';
import { useNavigate } from 'react-router-dom';

 function PHeader(){
    const navigate = useNavigate();

     return (
        <>
          <header className='p-header'>
                <div className='p-header-left'>
                    <img src={LeftArrow} alt="left arrow" className='left-arrow' onClick={() => navigate(-1)}/>
                    <img src={FlipLogo} alt="flipkart logo" className='flip-logo' onClick={() => navigate('/')}/>
                    <h1>Football</h1>
                </div>
                <div className='p-header-right'>
                    <img src={Search} alt="search logo"  className='search'/>
                    <img src={Cart} alt="cart logo" className='cart' />
                    <h1>Login</h1>
                </div>
          </header>
        </>
)}

 export default PHeader;