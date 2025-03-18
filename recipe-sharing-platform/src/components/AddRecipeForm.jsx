import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddRecipeForm = ({onAddRecipe}) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        if (!title.trim()) errors.title = "Title is required";
        if (!ingredients.trim()) errors.ingredients = "Ingredients are required";
        if (!steps.trim()) errors.steps = "Steps are required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const newRecipe = { id: Date.now(), title, ingredients, steps };
            onAddRecipe(newRecipe);

            // Reset the form
            setTitle("");
            setIngredients("");
            setSteps("");
            setErrors({});

            setTimeout(() => navigate("/"), 500);
        } catch (error) {
            console.error("Error adding recipe:", error);
            alert("An error occurred while adding the recipe. Please try again.");
        }
    };
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className='text-2xl font-bold mb-4'>Add a New Recipe</h1>
        <form
        onSubmit={handleSubmit}
        className='space-y-4'
        >

            {/* Recipe Title */}
            <div>
                <label className='block text-gray-700 font-semibold'>Recipe Title</label>
                <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter recipe title"
                className={`w-full mt-2 p-2 rounded-lg focus:ring-2 ${
                    errors.title ? "border-red-500" : "focus:ring-blue-500"
                  }`}
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            {/* Ingredients */}
            <div>
                <label className='block text-gray-700 font-semibold'>Ingredients</label>
                <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                rows="3"
                placeholder="List ingredients (comma separated)"
                className={`w-full mt-2 p-2 border rounded-lg focus:ring-2 ${
                    errors.ingredients ? "border-red-500" : "focus:ring-blue-500"
                  }`}
                >
                </textarea>
                {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
            </div>

            {/* Preparation Steps */}
            <div>
                <label className="block text-gray-700 font-semibold">Preparation Steps</label>
                <textarea
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                rows="4"
                placeholder="Describe the preparation steps"
                className={`w-full mt-2 p-2 border rounded-lg focus:ring-2 ${
                    errors.steps ? "border-red-500" : "focus:ring-blue-500"
                  }`}
                >
                </textarea>
                {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
            </div>

            {/* Submit Button */}
            <button
            type="submit"
            className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition'
            >
            Add Recipe
            </button>
        </form>
    </div>
  )
}

export default AddRecipeForm