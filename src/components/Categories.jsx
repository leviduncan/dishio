import { useContext, useState, useEffect, useRef } from 'react';
import { CategoryContext } from '../context/categoryContext';
import { RecipeContext } from '../context/recipeContext';
import Loading from './Loading';
import icons from '../data/icons';

const Categories = () => {
    const { categories, loading, error } = useContext(CategoryContext);
    const { setSearchQuery } = useContext(RecipeContext);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const carouselRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isHovered) {
                setScrollPosition((prevPosition) => prevPosition + 100); 
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [isHovered]);

    useEffect(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft = scrollPosition;
          if (scrollPosition >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
            setScrollPosition(0);
          }
        }
      }, [scrollPosition]);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const handleCategoryClick = (category) => {
        setSearchQuery(category);
    };

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="carousel-overlay container">
            <div
                ref={carouselRef}
                className="category-carousel container my-5 my-sm-4 mx-auto d-flex overflow-auto justify-content-center"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                {[...categories, ...categories, ...categories].map((category, idx) => {
                    const icon = icons.find((icon) => icon.name === category.strCategory);

                    return (
                        <div
                            key={idx}
                            className="category-item"
                            onClick={() => handleCategoryClick(category.strCategory)}
                        >
                            <p className="mr-5 d-flex justify-content-center align-items-center flex-column">
                                {icon && <img src={icon.icon} alt={icon.alt} />}
                                {category.strCategory}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Categories;