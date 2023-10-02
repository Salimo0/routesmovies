import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from './Components/MovieList';
import MovieTrailerPage from './Components/MovieTrailerPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Movie Trailers</h1>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:title" element={<MovieTrailerPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
