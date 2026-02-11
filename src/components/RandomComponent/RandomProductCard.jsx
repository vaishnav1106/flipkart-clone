
 function RandomCard(props){
     return (
        <>
            <div className='random-product'>
                <div className='random-product-image-main'>
                    <img src={props.img} alt="" />
                </div>
                <div className='random-product-details-main'>
                    <span>{props.text}</span>
                    <h3>{props.price}</h3>
                </div>
            </div>
            
        </>
)}

   

 export default RandomCard;