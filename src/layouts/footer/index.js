import logo from "../../assets/imgs/logo.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="footer-links">
                    
                </nav>
                <div className="footer-social">
                    
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Vietnam Blockchain Corporation 2023. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;