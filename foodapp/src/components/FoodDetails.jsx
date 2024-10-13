import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1> {food.title}</h1>
        <img src={food.image} alt="" />
        <div>
          <span>
            <strong>🕒{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong></strong>👨‍👩‍👦 Serves: {food.servings}
          </span>
          <span>
            {food.vegetarian ? " 🥕 Vegetarian" : " 🥩 Non-Vegetarian"}
          </span>
          <span>{food.vegan ? " 🐮 Vegan" : ""}</span>
        </div>
        <div>
          $ <samp>{(food.pricePerServing / 100).toFixed(4)} Per serving</samp>
        </div>
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
