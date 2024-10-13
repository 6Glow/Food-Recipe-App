import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

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
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕒{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👦 Serves: {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " 🥕 Vegetarian" : " 🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " 🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div className={styles.recipePrice}>
          ${" "}
          <samp>
            <strong>
              {(food.pricePerServing / 100).toFixed(4)} Per serving
            </strong>
          </samp>
        </div>

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
