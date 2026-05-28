import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

const MainLayout = () => (
    <div>
        <NavBar/>
        <div className="content-container">
            <Outlet/>
        </div>
        <Footer/>
    </div>
);

export default MainLayout;