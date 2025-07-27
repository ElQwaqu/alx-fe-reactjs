import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const { recipes, filteredRecipes, searchTerm } = useRecipeStore(state => ({
        recipes: state.recipes,
        filteredRecipes: state.filteredRecipes,
        searchTerm: state.searchTerm
    }));
    const navigate = useNavigate();

    const handleRecipeClick = (recipeId) => {
        navigate(`/recipe/${recipeId}`);
    };

    // Use filtered recipes if there's a search term, otherwise show all recipes
    const displayRecipes = searchTerm ? filteredRecipes : recipes;

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                <h2 style={{ margin: 0 }}>
                    {searchTerm ? `Search Results (${displayRecipes.length})` : 'Recipe List'}
                </h2>
                {searchTerm && displayRecipes.length > 0 && (
                    <span style={{
                        fontSize: '14px',
                        color: '#28a745',
                        fontWeight: 'bold'
                    }}>
                        Found {displayRecipes.length} recipe{displayRecipes.length !== 1 ? 's' : ''}
                    </span>
                )}
            </div>

            {displayRecipes.length === 0 ? (
                <div style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    border: '1px solid #e9ecef'
                }}>
                    {searchTerm ? (
                        <>
                            <p style={{ color: '#6c757d', fontSize: '18px', margin: '0 0 10px 0' }}>
                                🔍 No recipes found for "{searchTerm}"
                            </p>
                            <p style={{ color: '#6c757d', fontSize: '14px', margin: 0 }}>
                                Try a different search term or add a new recipe!
                            </p>
                        </>
                    ) : (
                        <>
                            <p style={{ color: '#6c757d', fontSize: '18px', margin: '0 0 10px 0' }}>
                                📝 No recipes yet!
                            </p>
                            <p style={{ color: '#6c757d', fontSize: '14px', margin: 0 }}>
                                Add your first recipe to get started.
                            </p>
                        </>
                    )}
                </div>
            ) : (
                displayRecipes.map(recipe => (
                    <div key={recipe.id} style={{
                        border: '1px solid #ddd',
                        margin: '10px 0',
                        padding: '15px',
                        borderRadius: '5px',
                        backgroundColor: '#f9f9f9'
                    }}>
                        <h3 style={{ color: '#333', marginBottom: '10px' }}>{recipe.title}</h3>
                        <p style={{ color: '#666', lineHeight: '1.5', marginBottom: '15px' }}>
                            {recipe.description.length > 100
                                ? `${recipe.description.substring(0, 100)}...`
                                : recipe.description}
                        </p>
                        <button
                            onClick={() => handleRecipeClick(recipe.id)}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                        >
                            View Details
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecipeList;
