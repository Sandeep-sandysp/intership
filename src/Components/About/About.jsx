
import { useNavigate } from "react-router-dom";
import "./about.css";
function About(){

    const navigate = useNavigate();
    const homeClicked=()=>{
        return navigate ('/');
    }
    return(
        <>
       <div className="background">
        <div className="tp">
         <div className="about">
            <div className="home">
               <h5
               onClick={()=>homeClicked()} >
               <div className="home-icon">
                <p className="add-first">Home</p>
                <div className="add-icon">
                <i class="fa-solid fa-house"></i>
                </div>
               </div>
               </h5>  
               
             </div>
            <div className="contain">
                <h3>A Recepie Book</h3>
            </div>
            <div className="aboutProject">
                    <div className="svada">Svada</div>
                    
                <h6 style={{margin:"1%"}}>A Recepie book for new generation</h6>
            </div>
            <div className="work">
                <ul className="list">
                    <li className="lists">
                        Desingned & Developed by - Sandeep SP
                    </li>
                </ul>
                {/* <h6 style={{margin:"2%"}}>Lavanya.H.J</h6> */}
            </div>
        </div>
        </div>
        </div>
        </>
    );
}
export default About;