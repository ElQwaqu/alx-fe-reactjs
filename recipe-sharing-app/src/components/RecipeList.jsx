import useRecipeStore from './recipeStore';

const RecipeList = ({ onRecipeClick }) => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
        <div>
            <h2>Recipe List</h2>
            {recipes.length === 0 ? (
                <p>No recipes yet. Add your first recipe!</p>
            ) : (
                recipes.map(recipe => (
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
                            onClick={() => onRecipeClick(recipe.id)}
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
