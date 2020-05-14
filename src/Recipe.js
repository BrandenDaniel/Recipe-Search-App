import React from 'react';
import './App.css';
import './Function';
import $ from 'jquery';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className="recipe-card">
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt="" />
            <button className="recipe_ingredient-expand">Click to view ingredients</button>
            <ol className="recipe-list">
                {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;