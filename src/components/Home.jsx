import Categories from './Categories';
import Hero from './Hero';
import Navbar from './Navbar';
import RecipeList from './RecipeList';

const Home = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <RecipeList />
        </>
    )
}

export default Home