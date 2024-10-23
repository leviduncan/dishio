import React, { useContext, useState, useEffect } from 'react';
import { RecipeContext } from '../context/recipeContext';

const chooseRandomRecipe = (recipes) => {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
};

const Hero = () => {
  const { searchQuery, handleSearch, recipes } = useContext(RecipeContext);
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
    if (recipes && recipes.length > 0) {
      setRandomRecipe(chooseRandomRecipe(recipes));
    } else {
      console.error("No recipes found");
    }
  }, [recipes]);

  if (!randomRecipe) return <div>Loading...</div>;

  return (
    <section className="hero-container">
      <picture>
        <source media="(max-width: 767px)" srcSet={randomRecipe?.strMealThumb} type="image/jpeg" />
        <source media="(min-width: 768px)" srcSet={randomRecipe?.strMealThumb} type="image/jpeg" />
        <img src={randomRecipe?.strMealThumb} alt={randomRecipe?.strMeal} loading="lazy" />
      </picture>
      <div className="px-4 py-5 my-5 text-center hero-content">
        <h1 className="display-5 fw-bold">{randomRecipe?.strMeal}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{randomRecipe?.strTags}.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;