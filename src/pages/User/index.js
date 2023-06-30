import "./User.scss";
import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { TextField, Button, Avatar, Input } from '@mui/material';
import axios from "axios";

import img from "../../assets/imgs/avatar.png"
const User = () => {
    let user = {
        firstname: 'Chinh',
        lastname: 'Lam',
        email: 'lamchinh@gmail.com',
        phone: '0123456789',
        avatar: img
    }

    const [firstname, setFirstname] = useState(user.firstname);
    const [lastname, setLastname] = useState(user.lastname);
    const [email, setEmail] = useState(user.email);
    const [phonenumber, setPhonenumber] = useState(user.phone);
    const [avatar, setAvatar] = useState(user.avatar);
    const [avatarchange, setAvatarchange] = useState(user.avatar);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const form1Ref = useRef(null);
    const form2Ref = useRef(null);

    const handleSubmit1 = async (event) => {

    };
    const handleSubmit2 = async (event) => {
        event.preventDefault();
        var data = JSON.stringify({
            "pinataOptions": {
                "cidVersion": 1
            },
            "pinataMetadata": {
                "name": "testing",
                "keyvalues": {
                    "customKey": "customValue",
                    "customKey2": "customValue2"
                }
            },
            "pinataContent": {
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "phonenumber": phonenumber
            }
        });
        var config = {
            method: 'post',
            url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            headers: {
                'Content-Type': 'application/json',
                'pinata_api_key': `${process.env.REACT_APP_PIN_KEY}`,
                'pinata_secret_api_key': `${process.env.REACT_APP_PIN_SECRET_KEY}`
            },
            data: data
        };
        const res = await axios(config);
        console.log(res.data);
    };
    const fetchdata = async (event) => {
        try {
            let ipfsHash = 'bafkreibexoobcff3skr2yvhcri3duins4rvc2kamfe4nx2lmnmsatxa4ny';
            const ipfsURL = `https://ipfs.io/ipfs/${ipfsHash}`;
            const response = await axios.get(ipfsURL);
            const jsonData = response.data;

            console.log(jsonData);
            // Dữ liệu JSON sẽ được hiển thị trong jsonData
        } catch (error) {
            console.error(error);
        }
    };
    const handleFileChange = async (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        setAvatar(file);
        setAvatarchange(URL.createObjectURL(file))
    };

    return (
        <div className='user'>
            <div className="user__title" onClick={fetchdata}>
                <h1>THÔNG TIN NGƯỜI DÙNG</h1>
            </div>
            <div className='user__field1'>
                <Avatar className="user__avatar" alt="Remy Sharp" src={avatarchange} sx={{ width: 200, height: 200 }} style={{ border: 0 }} />
                <div className="user__avatarchange">
                    <Input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                </div>
                <form ref={form1Ref} onSubmit={handleSubmit1}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Change avatar
                    </Button>
                </form>
            </div>
            <div className='user__field2'>
                <form ref={form2Ref} onSubmit={handleSubmit2}>
                    <TextField
                        id="firstname"
                        label="Firstname"
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        id="lastname"
                        label="Lastname"
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        id="phonenumber"
                        label="Phonenumber"
                        type="text"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Change information
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default User;