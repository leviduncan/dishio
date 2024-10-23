import React, { useContext } from 'react';
import { RecipeContext } from '../context/recipeContext';

const RecipeList = () => {
    const { recipes } = useContext(RecipeContext);
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {recipes.map((recipe) => (
                    <div className="card" key={recipe.idMeal}>
                        <img src={recipe.strMealThumb} className="card-img-top" alt={recipe.strMeal}/>
                            <div className="card-body">
                                <h5 className="card-title">{recipe.strMeal}</h5>
                                <p className="card-text">{recipe.strCategory} | {recipe.strArea}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeList