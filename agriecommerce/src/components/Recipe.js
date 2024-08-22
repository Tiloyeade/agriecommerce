// Recipe.js

import React from 'react';

const Recipe = ({ name, ingredients, instructions }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{name}</h2>
            <div className="recipe-details">
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
                    <ul className="list-disc list-inside">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="mb-1">{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
                    <ol className="list-decimal list-inside">
                        {instructions.map((instruction, index) => (
                            <li key={index} className="mb-2">{instruction}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
