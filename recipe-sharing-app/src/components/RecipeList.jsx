// src/components/RecipeList.jsx
import { Link } from 'react-router-dom'; // Imports Link to navigate to a recipe detail page.
import useRecipeStore from './recipeStore'; // Imports the store to access the recipes.

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes); // Selects the recipes from the store.

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one below!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px',
            }} // Maps over the recipes and displays each recipe in a card-like format.
          >
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#333' }}>
              <h3 style={{ margin: '0 0 5px 0' }}>{recipe.title}</h3>
              <p style={{ margin: '0' }}>{recipe.description}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;