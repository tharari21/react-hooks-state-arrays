import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  // Adds a new food to food state
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(foods);
    setFoods([...foods, newFood]);
  }
  // Removes food on click
  const handleLiClick = (id) => {
    setFoods(
      foods.map((food) => {
        if (food.id === id) {
          return { ...food, heatLevel: food.heatLevel + 1 };
        }
        return food;
      })
    );
  };
  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };
  const filteredFoods = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });
  const foodList = filteredFoods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
