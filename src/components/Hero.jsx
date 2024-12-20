import { useContext, useState, useEffect } from 'react';
import { RecipeContext } from '../context/recipeContext';
import Loading from './Loading'
import SearchBar from './SearchBar';
import heroes from '../data/hero'

const chooseRandomHero = (heroes) => {
  const randomIndex = Math.floor(Math.random() * heroes.length);
  return heroes[randomIndex];
};

const Hero = () => {
  const { searchQuery, handleSearch } = useContext(RecipeContext);
  const [randomHero, setRandomHero] = useState(null);

  useEffect(() => {
    if (heroes && heroes.length > 0) {
      setRandomHero(chooseRandomHero(heroes));
    } else {
      console.error("No heroes found");
    }
  }, []);

  if (!randomHero) return <Loading />;

  return (
    <section className="hero-container">
      <div className="picture-overlay">
      </div>
        <img src={randomHero.url} alt={randomHero.name} loading="lazy" />
        <div className="hero-content">
          <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
        </div>
    </section>
  );
};

export default Hero;