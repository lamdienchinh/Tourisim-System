import React, { useState } from "react";
import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, Menu } from "@mui/icons-material";
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../state/userSlice";
import { useSelector } from 'react-redux';
import { getUserData } from "../../state/selectors";

const Sidebar = () => {
    let walletAddress = useSelector(getUserData);

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setOpen(open);
    };
    const handleclick = async () => {
        if (window.confirm("Sure")) {
            dispatch(logout(dispatch));
            navigate('/home')
        }
    }

    return (
        <div className="sidebar">
            <Menu className="sidebar__menu" onClick={toggleDrawer(true)} />
            <SwipeableDrawer anchor="left" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
                <List>
                    <ListItem className="sidebar__item" component={Link} to="/user">
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText className="sidebar__item--text" primary="Dashboard" />
                    </ListItem>
                    <ListItem className="sidebar__item" component={Link} to="/album">
                        <ListItemIcon>
                            <PhotoAlbumIcon />
                        </ListItemIcon>
                        <ListItemText className="sidebar__item--text" primary="Album" />
                    </ListItem>
                    <ListItem className="sidebar__item" onClick={() => handleclick()}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText className="sidebar__item--text" primary="Logout" />
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </div>

    );
};

export default Sidebar;