import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import PopularPage from "../pages/PopularPage";


export default function RoutesViews() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/popular' element={<PopularPage />} />
        </Routes>
    )
}