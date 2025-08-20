import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pokemon from "./pages/Pokemon"
import Pokemons from "./pages/Pokemons"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Pokemons />
          } />
          <Route path='/pokemons/:name' element={<Pokemon />
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
