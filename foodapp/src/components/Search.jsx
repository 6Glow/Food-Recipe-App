import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood(){
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
      const data = await res.json();
      console.log(data)
      setFoodData(data.results)
    }
    fetchFood()
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
