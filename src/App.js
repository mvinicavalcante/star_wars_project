import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Contato from './pages/Contato';
import FilmDetail from './pages/FilmDetail';

function App() {
  return (
    <div>
      <Header />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/films' element={<Filmes />} />
            <Route path='/contact' element={<Contato />} />
            <Route path='/film-detail' element={<FilmDetail />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
