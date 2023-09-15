import { useNavigate } from "react-router-dom";
import "./about.css";
function About() {
  const navigate = useNavigate();
  const homeClicked = () => {
    return navigate("/");
  };
  return (
    <>
      <div className="background">
        <div className="tp">
          <div className="about">
            <div className="home">
              <h5 onClick={() => homeClicked()}>
                <div className="home-icon">
                  <p className="add-first">Home</p>
                  <div className="add-icon">
                    <i class="fa-solid fa-house"></i>
                  </div>
                </div>
              </h5>
            </div>
            <div className="contain">
              <h2>A Recipe Book</h2>
            </div>
            <div className="aboutProject">
              <div className="svada">Svada</div>
              <h4>A Recipe book for new generation</h4>
            </div>
            <div className="work">
              <div className="list">Desingned & Developed by</div>
              <div className="list">Sandeep SP</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
