import { useEffect, useState } from "react";
import "./menuitem.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "../YouTube/YouTube";
import AlsoLiked from "../AlsoLiked/AlsoLiked";
import Ingrediant from "../Ingrediant/Ingrediant";
import Preparation from "../Preparation/Preparation";
import Header from "../Layouts/Header";

function MenuItem(props) {
  const { id } = useParams();
  console.log(id);

  const menuItemURL = 
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const mealCategoryURL =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  const [mealSelected, setMealSelected] = useState();
  const [alsoLiked, setAlsoLiked] = useState([]);
  const [ingrediants, setIngrediants] = useState([]);
  const [preparation, setPreparation] = useState([]);

  const navigate = useNavigate();
  
  console.log("MenuItem rendered", preparation);
  useEffect(() => {
    const callAPIForID = async () => {
      const responseForID = await axios.get(menuItemURL + id);
      if(responseForID.data.meals){

        console.log("responseForID", responseForID);
        
        const ingrediantsData = Object.keys(responseForID.data.meals[0])
        .filter((eachKey) => {
          return RegExp(/strIngredient[0-9]+/).exec(eachKey);
        })
        .map((eachKey, index) => {
          return {
            [eachKey]: responseForID.data.meals[0][eachKey],
            [`strMeasure${index + 1}`]:
            responseForID.data.meals[0][`strMeasure${index + 1}`],
          };
        });
        console.log("ingrediant data", ingrediantsData);
        setIngrediants(ingrediantsData);
        const preparationData = responseForID.data.meals[0].strInstructions;
        const strInstructions = preparationData.split(".");
        console.log("string", strInstructions);
        setPreparation(strInstructions);
        setMealSelected(responseForID.data.meals[0]);
      }
      else {
        navigate('/PageNotFound')
      }
    }
    callAPIForID();
    console.log("entered useEffect in MenuItem");
  }, [id,navigate]);
  
  useEffect(() => {
    console.log(
      "entered useEffect in MenuItem for meal category",
      mealSelected?.strCategory
    );
    const callAPIForAlsoLiked = async () => {
      const responseForAlsoLiked = await axios.get(
        mealCategoryURL + mealSelected?.strCategory
      );

      const likedArray = [];
      if (responseForAlsoLiked !== null) {
        const arraySize = responseForAlsoLiked.data.meals.length;

        while (likedArray.length <= 3) {
          console.log(arraySize);
          const getRandomIndex = () => {
            let randomIndex = 0;

            randomIndex = Math.floor(Math.random() * arraySize);
            !likedArray.includes(randomIndex)
              ? likedArray.push(randomIndex)
              : getRandomIndex();
          };
          getRandomIndex();
        }
      }
      setAlsoLiked(
        likedArray.map(
          (eachIndex) => responseForAlsoLiked.data.meals[eachIndex]
        )
      );
    };
    mealSelected?.strCategory && callAPIForAlsoLiked();
  }, [mealSelected?.strCategory]);
   const onAlsoLiked = ( strMeal) => {
    console.log("item clicked:", strMeal);
    return navigate(`/MenuItem/${strMeal}`);
  };

  return (
    <>
    <Header />
      <div style={{width:'99%', margin:'10px'}}>
        <div className="top">
          <div className="same">
            <div className="video">
              <h1 classname="video-header">
                {mealSelected?.strMeal ? mealSelected.strMeal : " "}
              </h1>
              <YouTube youTubeId={mealSelected?.strYoutube.split("=")[1]} />
            </div>

            <div className="also">
              <h1>Also Liked</h1>
              {alsoLiked !== null ? (
                alsoLiked.map((eachElement) => (
                  
                  <AlsoLiked data={eachElement} onClick={onAlsoLiked} />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <h2>Ingrediants</h2>
            <div className="ingred">
              
                {ingrediants.map(
                  (eachObject, index) =>
                    eachObject[`strIngredient${index + 1}`] &&
                    eachObject[`strMeasure${index + 1}`] && (
                      <Ingrediant
                        key={index}
                        ingrediant={eachObject[`strIngredient${index + 1}`]}
                        measure={eachObject[`strMeasure${index + 1}`]}
                      />
                    )
                )}
            </div>

            <div className="prepa">
              <h2>Preparation</h2>
              <ul>
                {preparation.map((eachData) => (
                  <Preparation data={eachData} />
                ))}
              </ul>
            </div>
          </div>
        </div>
    </>
  );
}
export default MenuItem;
