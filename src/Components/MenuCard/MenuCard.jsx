import './menucard.css'
function MenuCard(props){
    return(
        <>
       
            <div className="cardtop"
            onClick={() => props.onCardClick(props.idMeal)}
            >
                <div className="carddesign">
                    
                    <img
                          style={{ width: "200px", height: "200px", }}
                          src={props.strMealThumb}
                          alt='Not Found'
                    /> 
                    <h4 style={{ textAlign: "center" }}>{props.strMeal}</h4>  
            </div> 
            </div>
       
        </>
    );
}
export default MenuCard;