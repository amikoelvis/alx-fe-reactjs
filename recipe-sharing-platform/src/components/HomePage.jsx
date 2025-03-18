import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddRecipeForm from './AddRecipeForm';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch("/data.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load recipes");
            }
            return response.json();
        })
        .then((data) => {
            setRecipes(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data", error);
            setError(error.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <p className="text-center text-gray-600 text-lg">Loading recipes...</p>;
    if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

    // Function to add a new recipe
    const handleAddRecipe = (newRecipe) => {
       setRecipes([...recipes, newRecipe]); // Update the recipes state
       setShowForm(false); // Hide the form after adding
    };

    return (
            <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold text-center mb-6'>Recipe Sharing Platform</h1>

            {/* Add Recipe Button */}
            <div className='flex justify-center mb-6'>
                <button
                onClick={() => setShowForm(!showForm)}
                className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'
                >
                    {showForm ? "Hide Form" : "Add New Recipe"}
                </button>
            </div>

            {/* Show Form when button is clicked */}
            {showForm && <AddRecipeForm onAddRecipe={handleAddRecipe} />}

            {/* Recipe List */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {recipes.map((recipe) => (
                    <div key={recipe.id} className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                        <img src={recipe.image} alt={recipe.title} className='w-full h-40 object-cover' />
                        <div className='p-4'>
                            <h2 className='text-xl font-semibold mb-2'>{recipe.title}</h2>
                            <p className='text-gray-600'>{recipe.summary}</p>
                            <Link to={`/recipe/${recipe.id}`} className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>View Recipe</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
