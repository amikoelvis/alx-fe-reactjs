import { create } from 'zustand'; // Import the create function from zustand.

const useRecipeStore = create((set) => ({
  recipes: [], // Initializes an empty array of recipes.
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })), // Adds a new recipe to the recipes
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id), // Filters out the recipe with the matching id.
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ), // Replaces the recipe with the matching id with the updated recipe.
    })),
  setRecipes: (recipes) => set({ recipes }), // Sets the recipes to the provided array of recipes.
}));

export default useRecipeStore;