// CategoriesSlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import home from "../home/home"
const CategoriesSlider = ({tabs}) => {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const categoriesSliderRef = useRef(null);

    useEffect(() => {
        const categoryWidth = categoriesSliderRef.current.firstChild.clientWidth;
        categoriesSliderRef.current.style.transform = `translateX(${-currentCategoryIndex * categoryWidth}px)`;
    }, [currentCategoryIndex]);

    const nextCategory = () => {
        setCurrentCategoryIndex(prevIndex => prevIndex < categoriesSliderRef.current.children.length - 1 ? prevIndex + 6 : prevIndex);
    };

    const prevCategory = () => {
        setCurrentCategoryIndex(prevIndex => prevIndex > 0 ? prevIndex - 6 : prevIndex);
    };

    return (
        <div className="categories-container">
            <div className="categories-slider" ref={categoriesSliderRef}>
                    <div className="category_header">
                        <Link to = "#">Categories</Link>
                        <button className="categories-btn">❮</button>
                    </div>
                    {tabs?.info?.tabs?.map((tap)=>(
                        <div className="category"><Link to = "#">{tap?.name}</Link></div>
                    ))}
                    
            </div>
            {/* <div className="categories-container_button">
                <button className="slider-btn prev-btn" onClick={prevCategory}>❮</button>
                <button className="slider-btn next-btn" onClick={nextCategory}>❯</button>
            </div> */}
        </div>
    );
};

export default CategoriesSlider;
