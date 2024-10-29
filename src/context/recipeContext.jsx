import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('Chicken');
  const [recipes, setRecipes] = useState([]);

  const getRecipeById = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    const recipe = data.meals[0];
  
    // Remove empty strings
    Object.keys(recipe).forEach((key) => {
      if (recipe[key] === '') {
        delete recipe[key];
      }
    });
  
    return recipe;
  }

  // const getRecipeById = async (id) => {
    
  //   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  //   const data = await response.json();
  //   return data.meals[0];
  // }

  useEffect(() => {
    const fetchRecipes = async () => {
      if (searchQuery.trim() !== '') {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
        setRecipes(response.data.meals);
      }
    };
    fetchRecipes();
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    window.location.hash = '#results';
  };

  return (
    <RecipeContext.Provider value={{ searchQuery, setSearchQuery, recipes, handleSearch, getRecipeById }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, RecipeContext };