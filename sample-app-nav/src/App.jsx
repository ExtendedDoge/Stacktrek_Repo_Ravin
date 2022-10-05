import TopBar from './component/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviesListPage from './page/MoviePage/MovieListPage';
import About from './page/AboutPage/About'
import Home from './page/Home';
import TouristAttractions from './page/TouristPage/TouristPlace';
import Error from './page/error404/error404';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesListPage />} />
        <Route path="/tourist" element={<TouristAttractions />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
