// src/components/RecipeList.jsx
import useRecipeStore from '../store/useRecipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

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
            }}
          >
            <h3 style={{ margin: '0 0 5px 0' }}>{recipe.title}</h3>
            <p style={{ margin: '0' }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;