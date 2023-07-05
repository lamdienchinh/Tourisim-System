import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connectWallet } from '../../state/userSlice';
import { useSelector } from 'react-redux';
import { getUserData } from '../../state/selectors';
import { useDispatch } from 'react-redux';
import { Avatar} from "@mui/material";
import Container from '@mui/material/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./css/Header.scss";
import logo from "../../assets/imgs/logo1.png"
import avatar from "../../assets/imgs/avatar.png";

const Header = () => {
    //Connect Wallet
    const dispatch = useDispatch();
    let walletAddress = useSelector(getUserData);
    let image = avatar;
    const navigate = useNavigate();
    const login = async () => {
        if (walletAddress) navigate("/user");
        else {
            dispatch(connectWallet(dispatch));
            // toast.success('Kết nối ví Metamask thành công !');
        }
    };

    return (
        <div className="header">
            <ToastContainer position="top-right"
                type="success"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            <Container maxWidth="lg">
                <div className="header__col1">
                    <img src={logo} alt="App Logo" />
                    <div>TourDC</div>
                </div>
                <div className="header__col2">
                    <div className="header__ele header__ele--home">
                        <NavLink className={({ isActive, isPending }) => isPending ? "header__link" : isActive ? "header__link--selected" : "header__link"} to='/home'>
                            HOME
                        </NavLink>
                    </div>
                    <div className="header__ele header__ele--aboutus">
                        <NavLink className={({ isActive, isPending }) => isPending ? "header__link" : isActive ? "header__link--selected" : "header__link"} to='/'>
                            ABOUT US
                        </NavLink>
                    </div>
                    <div className={walletAddress && walletAddress.length > 0 ? "header__ele header__ele--connected" : "header__ele header__ele--login"} onClick={login}>
                        {walletAddress && walletAddress.length > 0
                            ? <Avatar className="header__avatar" src={image} alt="Avatar" /> : "LOGIN"}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Header;