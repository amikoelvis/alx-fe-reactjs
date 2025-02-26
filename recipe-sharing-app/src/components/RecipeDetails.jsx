import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(Number(recipeId));
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(Number(recipeId));
    } else {
      addFavorite(Number(recipeId));
    }
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '10px' }}>{recipe.title}</h1>
      <p style={{ marginBottom: '20px' }}>{recipe.description}</p>
      <button
        onClick={toggleFavorite}
        style={{
          padding: '8px',
          marginBottom: '20px',
          backgroundColor: isFavorite ? '#FFD700' : '#ccc',
          color: 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;