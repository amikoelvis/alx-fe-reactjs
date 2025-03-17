import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/data.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load recipe details");
            }
            return response.json();
        })
        .then((data) => {
            const selectedRecipe = data.find((item) => item.id.toString() === id);
            if (!selectedRecipe) {
                throw new Error("Recipe not found");
            }
            setRecipe(selectedRecipe);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching recipe", error);
            setError(error.message);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <p className="text-center text-gray-600 text-lg">Loading recipe...</p>;
    if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

    return (
        <div className="container mx-auto p-4">
            <Link to="/" className="text-blue-500 hover:underline">← Back to Home</Link>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-4 p-6">
                <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded" />
                <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
                <p className="text-gray-600 mt-2">{recipe.summary}</p>

                {/* Placeholder for ingredients and instructions */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Ingredients</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Ingredient 1</li>
                        <li>Ingredient 2</li>
                        <li>Ingredient 3</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Instructions</h2>
                    <ol className="list-decimal pl-5 text-gray-700">
                        <li>Step 1: Do this</li>
                        <li>Step 2: Do that</li>
                        <li>Step 3: Serve and enjoy!</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
