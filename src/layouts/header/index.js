import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connectWallet } from '../../state/userSlice';
import { useSelector } from 'react-redux';
import { getUserData } from '../../state/selectors';
import { useDispatch } from 'react-redux';
import { Avatar } from "@mui/material";
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
        }
    };

    return (
        <div className="header">
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
    );
}

export default Header;