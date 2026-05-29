import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

const MainLayout = () => (
    <div className="flex flex-col items-stretch justify-between min-h-screen">
        <NavBar/>
        <div className="content-container">
            <Outlet/>
        </div>
        <Footer/>
    </div>
);

export default MainLayout;