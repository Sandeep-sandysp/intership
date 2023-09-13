import './ingrediant.css'
function Ingrediant(props) {
    console.log("Hi this is Ingrediant component with props", props);
    return (
      <>
        <div className="quality">
          <h5>{props.measure}</h5>
          <h4>{props.ingrediant}</h4>
        </div>
      </>
    );
  }
export default Ingrediant;  