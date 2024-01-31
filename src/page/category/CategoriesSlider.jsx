// CategoriesSlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const CategoriesSlider = ({tabs}) => {

    return (
        <div className="categories-container">
            <div className="categories-slider">
                    <div className="category_header">
                        <Link to = "#">Categories</Link>
                        <button className="categories-btn">❮</button>
                    </div>
                    {tabs?.info?.tabs?.map((tap)=>(
                        <div className="category"><Link to = {`/${tap?.name}`} >{tap?.name}</Link></div>
                    ))}
                    
            </div>
        </div>
    );
};

export default CategoriesSlider;
