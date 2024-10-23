import './App.css'
import Home from './components/Home'
import { RecipeProvider } from './context/recipeContext';

const App = () => {

  return (
    <RecipeProvider>
      <Home />
    </RecipeProvider>
  )
}

export default App
