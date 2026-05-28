import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";


const AppRouter = () => (
    <Router>
        <Routes>

            <Route element={<MainLayout/>}>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/projects"} element={<Projects/>}/>
                <Route path={"/contacts"} element={<Contacts/>}/>
            </Route>

            <Route path={"*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    </Router>
);

export default AppRouter;