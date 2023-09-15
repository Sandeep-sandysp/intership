import "./menucard.css";
const  MenuCard = (props) =>{
  return (
    <>
      <div class="cardtop" onClick={() => props.onCardClick(props.idMeal)}>
        <img src={props.strMealThumb} alt="Avatar" style={{ width:'100%'}}/>
        <div class="container" style={{textAlign:'center'}}>
          <h4>
            <b>{props.strMeal}</b>
          </h4>
        </div>
      </div>
    </>
  );
}
export default MenuCard;
