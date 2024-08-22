// MyRecipePage.js

import React from 'react';
import Recipe from './Recipe';

const MyRecipePage = () => {
    const ingredients = ['2 cups flour', '1 cup sugar', '1/2 cup butter', '2 eggs', '1 tsp baking powder'];
    const instructions = [
        'Preheat oven to 350°F.',
        'Mix flour and baking powder in a bowl.',
        'Cream butter and sugar together, then add eggs.',
        'Gradually add dry ingredients to wet ingredients.',
        'Drop spoonfuls onto baking sheet and bake for 10-12 minutes.'
    ];

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="max-w-lg bg-white rounded-lg overflow-hidden shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-4">Delicious Cake Recipe</h1>
                <Recipe name="Vanilla Cake" ingredients={ingredients} instructions={instructions} />
            </div>
        </div>
    );
};

export default MyRecipePage;
