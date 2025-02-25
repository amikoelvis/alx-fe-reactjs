// src/components/AddRecipeForm.jsx
import { useState } from 'react'; // Uses useState for local form state (title, description).
import useRecipeStore from './recipeStore'; // Imports the store to add a new recipe.

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe); // Selects the addRecipe action from the store.
  const [title, setTitle] = useState(''); // Initializes the title state.
  const [description, setDescription] = useState(''); // Initializes the description state.

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission.
    if (!title.trim() || !description.trim()) return; // Ensures title and description are not empty.
    addRecipe({ id: Date.now(), title, description }); // Adds a new recipe with the current date as the id.
    setTitle(''); // Resets the title state after adding a new recipe.
    setDescription(''); // Resets the description state after adding a new recipe.
  }; // Resets the form state after adding a new recipe.

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        style={{ padding: '8px', fontSize: '16px', minHeight: '100px' }}
      />
      <button
        type="submit"
        style={{
          padding: '8px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;