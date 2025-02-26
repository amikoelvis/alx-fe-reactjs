// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px',
            }}
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