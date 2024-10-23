import React, { useContext } from 'react';
import { RecipeContext } from '../context/recipeContext';
import Hero from './Hero';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const Home = () => {
  const { searchQuery, handleSearch, recipes } = useContext(RecipeContext);
    
    return (
        <>
        <Navbar/>
        <Hero />
       <SearchBar  handleSearch={handleSearch} searchQuery={searchQuery} />
       <RecipeList />
        </>
    )
}

export default Home