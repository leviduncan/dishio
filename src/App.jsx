import './App.css';
import Home from './components/Home';
import { RecipeProvider } from './context/recipeContext';
import { CategoryProvider } from './context/categoryContext';


const App = () => {
  return (
    <RecipeProvider>
      <CategoryProvider>
        <Home />
      </CategoryProvider>
    </RecipeProvider>
  );
};


export default App;
