import { useState } from 'react';
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'

function App() {
  const [currentView, setCurrentView] = useState('list');
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleRecipeClick = (recipeId) => {
    setSelectedRecipeId(recipeId);
    setCurrentView('details');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedRecipeId(null);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '40px',
        borderBottom: '2px solid #007bff',
        paddingBottom: '20px'
      }}>
        <h1 style={{
          color: '#333',
          fontSize: '2.5rem',
          margin: '0'
        }}>
          Recipe Sharing App
        </h1>
        <p style={{
          color: '#666',
          fontSize: '1.1rem',
          margin: '10px 0 0 0'
        }}>
          Share and discover amazing recipes!
        </p>
      </header>

      <main>
        {currentView === 'list' && (
          <>
            <AddRecipeForm />
            <RecipeList onRecipeClick={handleRecipeClick} />
          </>
        )}

        {currentView === 'details' && (
          <RecipeDetails
            recipeId={selectedRecipeId}
            onBack={handleBackToList}
          />
        )}
      </main>
    </div>
  )
}

export default App
