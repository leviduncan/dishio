const RecipeSearch = ({ recipes }) => {

   return (
    <section className="py-5 text-center container" id="results">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h2 className="fw-light">Recipe Search Results</h2>
      </div>
    </div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strCategory} | {recipe.strArea}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecipeSearch;