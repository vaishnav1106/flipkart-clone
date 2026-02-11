import './CategoriesCard.css';


 function CategoriesCard(props){
     return (
        <>
          <div className='card-main'>
            <div>
                <img src={props.img} alt={props.alt}/>
            </div>
            <p>{props.text}</p>
          </div>  
        </>
)}

 export default CategoriesCard;