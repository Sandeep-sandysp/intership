import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import { useNavigate } from "react-router-dom";
import "./menu.css";
import Header from "../Layouts/Header";

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

  
  const handleFilterClick = (value) => {
    setFilterSelection(value);
  };

  return (
    <>
      <div>
        <Header />
        <div class="main-container"> 
        <div className="itemsmenu">
          <div className="fill"><h2>Filters:</h2></div>
          <div className="listcontents">
            <h4 style={{cursor:'pointer',}} onClick={() => handleFilterClick(FilterSelectionConstants)}>All</h4>
            <h4 style={{cursor:'pointer'}} onClick={() => handleFilterClick(["Breakfast"])}>Breakfast</h4>
            <h4 style={{cursor:'pointer'}} onClick={() => handleFilterClick(["Chicken"])}>Chicken</h4>
            <h4 style={{cursor:'pointer'}} onClick={() => handleFilterClick(["Pasta"])}>Pasta</h4>
            <h4 style={{cursor:'pointer'}} onClick={() => handleFilterClick(["Seafood"])}>Seafood</h4>
            <h4 style={{cursor:'pointer'}} onClick={() => handleFilterClick(["Dessert"])}>Dessert</h4>
            <h4 style={{cursor:'pointer'}} onClick={() => handleFilterClick(["Vegetarian"])}>Vegetarian</h4>
          </div>
        </div>
<div className="itemsmenu">
        {filterSelection.includes("Breakfast") && 
          <div className="fill"><h2>Breakfast:</h2></div>}
          <div className="items-list">
        {filterSelection.includes("Breakfast") &&
          breakfastData.map((item, index) => (
            <MenuCard
              key={item.idMeal}
              strMeal={item.strMeal}
              idMeal={item.idMeal}
              strMealThumb={item.strMealThumb}
              onCardClick={cardClicked}
            />
          ))}</div>

{filterSelection.includes("Chicken") && <div className="fill"><h2>Chicken:</h2>
          </div>}
          <div className="items-list">
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
          })}</div>

{filterSelection.includes("Pasta") && <div className="fill"><h2>Pasta:</h2>
          </div>}
          <div className="items-list">
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
          })}</div>

{filterSelection.includes("Seafood") && <div className="fill"><h2>SeaFood:</h2>
          </div>}
          <div className="items-list">
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
          })}</div>

{filterSelection.includes("Dessert") &&  <div className="fill"><h2>Dessert:</h2>
          </div>}
          <div className="items-list">
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
          })}</div>

{filterSelection.includes("Vegetarian") &&<div className="fill"><h2>Vegetarian:</h2>
          </div>}
          <div className="items-list">
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
          })}</div>
          </div>
          </div>
      </div>
    </>
  );
}
export default Menu;
