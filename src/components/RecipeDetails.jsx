import { useContext, useEffect, useState } from 'react';
import { RecipeContext } from '../context/recipeContext';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import BreadCrumbs from './BreadCrumbs';

const RecipeDetails = () => {
    const { id } = useParams();
    const { getRecipeById } = useContext(RecipeContext);
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const data = await getRecipeById(id);
            setRecipe(data);
        };
        fetchRecipe();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="recipe-details">
            <Navbar />
            <BreadCrumbs meal={recipe.strMeal} />
            <div className="container">
                <div className="d-flex flex-column flex-sm-row py-5">
                    <div className="col-12 col-sm-6 col-md-8">
                        <img src={recipe.strMealThumb} className="img-fluid" alt={recipe.strMeal} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <h1>{recipe.strMeal}</h1>
                        <h4>Category: {recipe.strCategory}</h4>
                        <h6>Origin: {recipe.strArea}</h6>
                        <p>{recipe.strInstructions}</p>
                        <h3>Ingredients:</h3>
                        <ul>
                            {Object.keys(recipe).filter(key => key.includes('Ingredient')).map(key => (
                                <li key={key}>{recipe[key]}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RecipeDetails;