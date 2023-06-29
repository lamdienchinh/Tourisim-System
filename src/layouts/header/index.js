import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";

const Header = () => {
    //Connect Wallet
    const [walletAddress, setWalletAddress] = useState("");

    const connectWallet = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                /* MetaMask is installed */
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
                console.log(accounts[0]);
            } catch (err) {
                console.error(err.message);
            }
        } else {
            /* MetaMask is not installed */
            console.log("Please install MetaMask");
        }
    };

    const logout = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.disconnect();
                setWalletAddress('');
                console.log('Disconnected');
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('Ethereum wallet is not available');
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
            <div className={walletAddress && walletAddress.length > 0 ? "header__ele header__ele--connected" : "header__ele header__ele--login"} onClick={connectWallet}>
                {walletAddress && walletAddress.length > 0
                    ? `CONNECTED: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "LOGIN"}
            </div>
        </div>
    );
}

export default Header;