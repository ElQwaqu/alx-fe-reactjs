import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <Router>
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
          <Routes>
            <Route path="/" element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            } />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
