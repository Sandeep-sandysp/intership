import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import { useNavigate } from "react-router-dom";
import "./menu.css";

function Menu() {
  const [breakfastData, setBreakfastData] = useState([]);
  const [chickenData, setChickenData] = useState([]);
  const [seafoodData, setSeafoodData] = useState([]);
  const [desertData, setDesertData] = useState([]);
  const [vegetarianData, setVegetarianData] = useState([]);
  const [pastaData, setPastaData] = useState([]);

  const FilterSelectionConstants = [
    'Breakfast',
    'Chicken',
    'Pasta',
    'Seafood',
    'Dessert',
    'Vegetarian',
  ];

  const [filterSelection, setFilterSelection] = useState(FilterSelectionConstants);

  
  const breakfastUrl =
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${FilterSelectionConstants[0]}`;
  const chickenUrl =
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${FilterSelectionConstants[1]}`;
  const pastaUrl =
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${FilterSelectionConstants[2]}`;
  const seafoodUrl =
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${FilterSelectionConstants[3]}`;
  const desertUrl =
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${FilterSelectionConstants[4]}`;
  const vegetarianUrl =
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${FilterSelectionConstants[5]}`;

  useEffect(() => {
    console.log("Entered useEffect with empty dependency rendered");
    axios.get(breakfastUrl).then((response) => {
      setBreakfastData(response.data.meals);
    });
  }, [breakfastUrl]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(chickenUrl).then((response) => {
      setChickenData(response.data.meals);
    });
  }, [chickenUrl]);

  useEffect(() => {
    axios.get(pastaUrl).then((response) => {
      setPastaData(response.data.meals);
    });
  }, [ pastaUrl]);

  useEffect(() => {
    axios.get(seafoodUrl).then((response) => {
      setSeafoodData(response.data.meals);
    });
  }, [seafoodUrl]);

  useEffect(() => {
    axios.get(desertUrl).then((response) => {
      setDesertData(response.data.meals);
    });
  }, [desertUrl]);

  useEffect(() => {
    axios.get(vegetarianUrl).then((response) => {
      setVegetarianData(response.data.meals);
    });
  }, [vegetarianUrl]);

  const cardClicked = (idMeal) => {
    return navigate(`/MenuItem/${idMeal}`);
  };

  const aboutClicked = () => {
    return navigate(`/About`);
  };

  const handleFilterClick = (value) => {
    setFilterSelection(value);
  };

  return (
    <>
      <div>
        <div className="menutop">
          <nav className="navbar">
            <h1
              style={{ textAlign: "center", position: "relative", left: "45%" }}
            >
              SVADA
            </h1>
            <h4
              className="abt"
              style={{ textAlign: "left", cursor: "pointer", right: "0" }}
              onClick={() => aboutClicked()}
            >About </h4>
           
            {/* <About
      onAboutClick={aboutClicked} 
      /> */}
          </nav>
        </div>
        <div className="filters">
          <div className="fill"><h2>Filters:</h2></div>
          <div className="listcontents">
            <h4 onClick={() => handleFilterClick(FilterSelectionConstants)}>All</h4>
            <h4 onClick={() => handleFilterClick(["Breakfast"])}>Breakfast</h4>
            <h4 onClick={() => handleFilterClick(["Chicken"])}>Chicken</h4>
            <h4 onClick={() => handleFilterClick(["Pasta"])}>Pasta</h4>
            <h4 onClick={() => handleFilterClick(["Seafood"])}>Seafood</h4>
            <h4 onClick={() => handleFilterClick(["Dessert"])}>Dessert</h4>
            <h4 onClick={() => handleFilterClick(["Vegetarian"])}>Vegetarian</h4>
          </div>
        </div>
<div className="itemsmenu">
        {filterSelection.includes("Breakfast") && <div className="menu"><h3>Breakfast</h3>
          </div>}
        {filterSelection.includes("Breakfast") &&
          breakfastData.map((item, index) => (
            <MenuCard
              key={item.idMeal}
              strMeal={item.strMeal}
              idMeal={item.idMeal}
              strMealThumb={item.strMealThumb}
              onCardClick={cardClicked}
            />
          ))}

{filterSelection.includes("Chicken") && <div className="menu"><h3>Chicken</h3>
          </div>}
{filterSelection.includes("Chicken") &&
          chickenData.map(function (item, index) {
            return (
              <MenuCard
                key={item.idMeal}
                strMeal={item.strMeal}
                idMeal={item.idMeal}
                strMealThumb={item.strMealThumb}
                onCardClick={cardClicked}
              />
            );
          })}

{filterSelection.includes("Pasta") && <div className="menu"><h3>Pasta</h3>
          </div>}
{filterSelection.includes("Pasta") &&  
          pastaData.map(function (item, index) {
            return (
              <MenuCard
                key={item.idMeal}
                strMeal={item.strMeal}
                idMeal={item.idMeal}
                strMealThumb={item.strMealThumb}
                onCardClick={cardClicked}
              />
            );
          })}

{filterSelection.includes("Seafood") && <div className="menu"><h3>SeaFood</h3>
          </div>}
{filterSelection.includes("Seafood") && 
          seafoodData.map(function (item, index) {
            return (
              <MenuCard
                key={item.idMeal}
                strMeal={item.strMeal}
                idMeal={item.idMeal}
                strMealThumb={item.strMealThumb}
                onCardClick={cardClicked}
              />
            );
          })}

{filterSelection.includes("Dessert") &&  <div className="menu"><h3>Dessert</h3>
          </div>}
{filterSelection.includes("Dessert") &&
          desertData.map(function (item, index) {
            return (
              <MenuCard
                key={item.idMeal}
                strMeal={item.strMeal}
                idMeal={item.idMeal}
                strMealThumb={item.strMealThumb}
                onCardClick={cardClicked}
              />
            );
          })}

{filterSelection.includes("Vegetarian") &&<div className="menu"><h3>Vegetarian</h3>
          </div>}
{filterSelection.includes("Vegetarian") &&
          vegetarianData.map(function (item, index) {
            return (
              <MenuCard
                key={item.idMeal}
                strMeal={item.strMeal}
                idMeal={item.idMeal}
                strMealThumb={item.strMealThumb}
                onCardClick={cardClicked}
              />
            );
          })}
          </div>
      </div>
    </>
  );
}
export default Menu;
