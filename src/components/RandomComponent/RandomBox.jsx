import './RandomBox.css'
import RandomCard from './RandomProductCard';
import RandomImage2 from './RandomBox images/RandomProductImage2.jpeg'

const randomProductDetails = [
    {
        Image: RandomImage2,
        text: "Best Picks",
        price: "Under $499"     
    },
    {
        Image: RandomImage2  ,
        text: "Don't Miss",
        price: "Special offer"      
    },
    {
        Image: RandomImage2,
        text: "Explore Now",
        price: "Up to 90% Off"     
    },
    {
        Image: RandomImage2,
        text: "Hand-picked",
        price: "Up to 90% Off"        
    },
]



 function RandomBox(){
     return (
        <>
            <div className='random-box'>
                <div className='random-box-main'>
                    <h1>Widest collection</h1>
                    <div className='random-products'>
                        {randomProductDetails.map((card, index) => {
                            return <RandomCard key={index} img={card.Image} text={card.text} price={card.price}/>
                        })}
                    </div>
                </div>
            </div>
            <div className="underline"></div>
        </>
)}

 export default RandomBox;