export default function Item({ item }) {
  return (
    <div>
      <div key={item.id}>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
          alt={item.name}
        />
        <h3>{item.name}</h3>
        <h3>
          {item.amount} {item.unit}
        </h3>
      </div>
    </div>
  );
}