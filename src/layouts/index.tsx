import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from "../Components/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto my-4 relative md:p-4">
                <Outlet />
            </div>
            <ToastContainer />
        </>
    )
}

export default Layout;