import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('Chicken');
  const [recipes, setRecipes] = useState([]);

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
    <RecipeContext.Provider value={{ searchQuery, setSearchQuery, recipes, handleSearch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, RecipeContext };