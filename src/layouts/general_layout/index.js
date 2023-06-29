import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
const General_Layout = () => {
    return (
        <div className="wrapper">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}
export default General_Layout;