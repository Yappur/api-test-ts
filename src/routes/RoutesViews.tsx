import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";


export default function RoutesViews() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:name' element={<Movie />} />
        </Routes>
    )
}