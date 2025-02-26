import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) => (
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

export default FavoritesList;