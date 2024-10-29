import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { RecipeProvider } from './context/recipeContext';
import { CategoryProvider } from './context/categoryContext';
import RecipeDetails from './components/RecipeDetails';


const App = () => {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <RecipeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </RecipeProvider>
      </CategoryProvider>
    </BrowserRouter>
  );
};


export default App;
