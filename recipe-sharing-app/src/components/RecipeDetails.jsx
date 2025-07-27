import { useState } from 'react';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId, onBack }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );
    const [isEditing, setIsEditing] = useState(false);

    if (!recipe) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Recipe not found</h2>
                <button
                    onClick={onBack}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Back to Recipes
                </button>
            </div>
        );
    }

    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <button
                onClick={onBack}
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginBottom: '20px'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
            >
                ← Back to Recipes
            </button>

            <div style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{
                    color: '#333',
                    marginBottom: '15px',
                    borderBottom: '2px solid #007bff',
                    paddingBottom: '10px'
                }}>
                    {recipe.title}
                </h1>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#666', marginBottom: '10px' }}>Description:</h3>
                    <p style={{
                        color: '#555',
                        lineHeight: '1.6',
                        fontSize: '16px',
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '4px'
                    }}>
                        {recipe.description}
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    gap: '10px',
                    borderTop: '1px solid #eee',
                    paddingTop: '15px'
                }}>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: isEditing ? '#6c757d' : '#ffc107',
                            color: isEditing ? 'white' : '#212529',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = isEditing ? '#5a6268' : '#e0a800';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = isEditing ? '#6c757d' : '#ffc107';
                        }}
                    >
                        {isEditing ? 'Cancel Edit' : 'Edit Recipe'}
                    </button>

                    <DeleteRecipeButton recipeId={recipe.id} />
                </div>

                {isEditing && (
                    <EditRecipeForm
                        recipe={recipe}
                        onCancel={() => setIsEditing(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default RecipeDetails;
