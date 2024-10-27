import { useContext } from 'react';
import { RecipeContext } from '../context/recipeContext';

const RecipeList = () => {
    const { recipes } = useContext(RecipeContext);

    if (!recipes) {
        return <div className="recipe-results">
        <div className="container text-center">
            <h4>No items found for this category!</h4>
        </div>
        </div>;
    }

    return (
        <div className="recipe-results">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-2">
                {recipes.map((recipe) => (
                    <div className="col pb-4" key={recipe.idMeal}>
                        <div className="card">
                        <div className="card-img-grp">
                        <h4>{recipe.strMeal}</h4>
                            <div className="gradient-overlay"></div>
                            <img src={recipe.strMealThumb} className="card-img-top" alt={recipe.strMeal} />
                        </div>
                            <div className="card-body">
                                <h5 className="card-title">Category: {recipe.strCategory}</h5>
                                <p className="card-text">Origin: {recipe.strArea}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default RecipeList