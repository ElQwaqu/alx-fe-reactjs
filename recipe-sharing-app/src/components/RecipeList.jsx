import useRecipeStore from './recipeStore';

const RecipeList = () => {
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
                        <p style={{ color: '#666', lineHeight: '1.5' }}>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecipeList;
