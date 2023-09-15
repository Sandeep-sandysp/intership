function YouTube(props){
    // const youtubevedio = 'BoD0TIO9nE4';
    return(
        <>
        {/* <div className="breakfast"> */}
        <iframe style={{borderRadius:'20px', height:'calc(100%)'}}
         src={`https://www.youtube.com/embed/${props.youTubeId}`} 
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
          {/* </div> */}
        </>
    );
}                
export default YouTube;