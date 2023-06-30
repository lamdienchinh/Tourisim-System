import React, { useState } from 'react';
import { Pagination } from '@mui/material';
import AlbumThumbnail from "../../components/album_thumbnail";
import img from "../../assets/imgs/slider_banner_1.png";
import { useNavigate } from 'react-router-dom';
import './Album.scss';

const Album = () => {
    const [albums, setAlbums] = useState([]);
    const [newAlbum, setNewAlbum] = useState('');
    const navigate = useNavigate();
    const handleAddAlbum = () => {
        navigate("/createalbum");
        if (newAlbum) {
            setAlbums([...albums, newAlbum]);
            setNewAlbum('');
        }

    };

    ////////////////////////
    const [select, setSelect] = useState(1);
    //Lấy place để hiển thị


    //handle chọn trang
    const handlePageChange = (event, number) => {
        setSelect(number);
    }

    let temp = {
        title: "TITLE",
        img: img,
        rate: 5,
        address: "ADDRESS",
        comment: "COMMENT"
    }
    const array = Array.from({ length: 32 }, () => ({ ...temp }));

    let start = 12 * (select - 1);
    let end = start + 12;
    if (end > array.length) end = array.length;
    let currents = array.slice(start, end);
    let totalPages = Math.ceil((array.length) / 12);

    let row1 = currents.slice(0, 3);
    let row2 = currents.slice(3, 6);
    let row3 = currents.slice(6, 9);
    let row4 = currents.slice(9, 12);

    return (
        <div className="album">
            <div className="album__title">
                <h1>Trang Album</h1>
            </div>
            <div className="album__row row1">
                <button className="album__button" onClick={handleAddAlbum}>
                    Thêm Album
                </button>
            </div>
            <div className="album__row row2">
                <div className="home__results">
                    <div className="home__results--1">
                        {row1 && row1.map((item, itemIndex) => (
                            <AlbumThumbnail place={item}></AlbumThumbnail>
                        ))}
                    </div>
                    <div className="home__results--2">
                        {row2 && row2.map((item, itemIndex) => (
                            <AlbumThumbnail place={item}></AlbumThumbnail>
                        ))}
                    </div>
                    <div className="home__results--3">
                        {row3 && row3.map((item, itemIndex) => (
                            <AlbumThumbnail place={item}></AlbumThumbnail>
                        ))}
                    </div>
                    <div className="home__results--4">
                        {row4 && row4.map((item, itemIndex) => (
                            <AlbumThumbnail place={item}></AlbumThumbnail>
                        ))}
                    </div>
                    <div className="home__results--pagination">
                        <Pagination count={totalPages} onChange={handlePageChange} showFirstButton showLastButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Album;