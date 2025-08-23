import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PopularPage from "../pages/PopularPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";

export default function RoutesViews() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<PopularPage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
    </Routes>
  );
}
