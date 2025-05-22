export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const listIngredients = ingredients.map((item) => {
    return <li key={item}>{item}</li>;
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{listIngredients}</ul>
    </main>
  );
}
