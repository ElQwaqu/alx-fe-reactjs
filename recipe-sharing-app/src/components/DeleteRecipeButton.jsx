import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this recipe?')) {
            deleteRecipe(recipeId);
        }
    };

    return (
        <button
            onClick={handleDelete}
            style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                marginLeft: '10px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
        >
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;
