import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by title..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '8px',
        fontSize: '16px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    />
  );
};

export default SearchBar;