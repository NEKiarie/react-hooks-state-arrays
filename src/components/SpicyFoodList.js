import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  //const [filterBy, setFilterBy] = useState("All");

  
  //Handling Multiple State Variables
// function handleFilterChange(event) {
//   setFilterBy(event.target.value);
// }
// const foodsToDisplay = foods.filter((food) => {
//   if (filterBy === "All") {
//     return true;
//   } else {
//     return food.cuisine === filterBy;
//   }
// });

// return (
//   <select name="filter" onChange={handleFilterChange}>
//     <option value="All">All</option>
//     <option value="American">American</option>
//     <option value="Sichuan">Sichuan</option>
//     <option value="Thai">Thai</option>
//     <option value="Mexican">Mexican</option>
//   </select>
// );




  //Creating a new Array of food and updating using state
function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  // //Handling the removal of Food via a click
  // function handleLiClick(id) {
  //   const newFoodArray = foods.filter((food) => food.id !== id);
  //   setFoods(newFoodArray);
  // }

  //Handling the Li Updating/increment on listed food
  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  //Handling Food rendering on the page
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
