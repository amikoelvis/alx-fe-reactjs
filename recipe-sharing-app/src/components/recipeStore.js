import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      const updatedFavorites = state.favorites.filter((favId) => favId !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
        favorites: updatedFavorites,
        recommendations: updatedRecipes.filter((recipe) =>
          updatedFavorites.includes(recipe.id) && Math.random() > 0.5
        ),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  addFavorite: (recipeId) =>
    set((state) => {
      if (state.favorites.includes(recipeId)) return state;
      const updatedFavorites = [...state.favorites, recipeId];
      return {
        favorites: updatedFavorites,
        recommendations: state.recipes.filter((recipe) =>
          updatedFavorites.includes(recipe.id) && Math.random() > 0.5
        ),
      };
    }),

  removeFavorite: (recipeId) =>
    set((state) => {
      const updatedFavorites = state.favorites.filter((id) => id !== recipeId);
      return {
        favorites: updatedFavorites,
        recommendations: state.recipes.filter((recipe) =>
          updatedFavorites.includes(recipe.id) && Math.random() > 0.5
        ),
      };
    }),

  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      ),
    })),
}));

export default useRecipeStore;