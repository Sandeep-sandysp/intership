import './alsoliked.css'
function AlsoLiked(props) {
    console.log("props", props);
    return (
      <>
        <div className="alsoliked">
          <div
            className="like"
            onClick={() => {
              console.log("datastrmeal", props.data.idMeal);
              return props.onClick(props.data.idMeal);
            }}
          >
            <div className="image">
              <img
                src={props.data.strMealThumb}
                width="90"
                height="90"
                style={{ borderRadius: "50%", position:"relative",
                bottom:'9px', right:'9px' }}
                alt="nothing to display"
                

              />
              <strong className='content' >{props.data.strMeal}</strong>
            </div>
          </div>
        </div>
      </>
    );
}
export default AlsoLiked;