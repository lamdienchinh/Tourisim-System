import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../header";
import Footer from "../footer";
const UserLayout = () => {
    return (
        <div className="userlayout">
            <Header></Header>
            <div className="userlayout__sidebar">
                <Sidebar></Sidebar>
            </div>
            <div className="userlayout__body">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default UserLayout;