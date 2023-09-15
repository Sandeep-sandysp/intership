import './ingrediant.css'
function Ingrediant(props) {
    console.log("Hi this is Ingrediant component with props", props);
    return (
      <>
        <div className="quality">
          <h6 style={{textAlign:'center'}}>{props.measure}</h6>
          <h5 style={{textAlign:'center'}}>{props.ingrediant}</h5>
        </div>
      </>
    );
  }
export default Ingrediant;  