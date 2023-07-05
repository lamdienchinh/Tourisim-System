import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import AlbumThumbnail from "../../components/album_thumbnail";
import img from "../../assets/imgs/slider_banner_1.png";
import { useNavigate } from 'react-router-dom';
import './css/Album.scss';

const Album = () => {
    const [albums, setAlbums] = useState([]);
    const [newAlbum, setNewAlbum] = useState('');
    const [row1, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);
    const [row3, setRow3] = useState([]);
    const [row4, setRow4] = useState([]);
    const [select, setSelect] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    const handleAddAlbum = () => {
        navigate("/createalbum");
        if (newAlbum) {
            setAlbums([...albums, newAlbum]);
            setNewAlbum('');
        }
    };
    const handleTrip = () => {
        navigate("/trips");
    };

    const handlePageChange = (event, number) => {
        setSelect(number);
    }

    useEffect(() => {
        let temp = {
            title: "TITLE",
            img: img,
            rate: 5,
            address: "ADDRESS",
            comment: "COMMENT",
            time: "23:00, 01-07-2023"
        }
        let array = Array.from({ length: 32 }, () => ({ ...temp }));
        setAlbums(array);
    }, []);

    useEffect(() => {
        let start = 12 * (select - 1);
        let end = start + 12;
        if (end > albums.length) end = albums.length;
        let currents = albums.slice(start, end);
        let totalPages = Math.ceil(albums.length / 12);

        let row1 = currents.slice(0, 3);
        let row2 = currents.slice(3, 6);
        let row3 = currents.slice(6, 9);
        let row4 = currents.slice(9, 12);

        setRow1(row1);
        setRow2(row2);
        setRow3(row3);
        setRow4(row4);
        setTotalPages(totalPages);
    }, [albums, select]);

    return (
        <div className="album">
            <div className="album__title">
                <h1>Trang Album</h1>
            </div>
            <div className="album__row row1">
                <button className="album__button" onClick={handleAddAlbum}>
                    Thêm Album
                </button>
                <button className="album__button" onClick={handleTrip}>
                    Xem Trips
                </button>
            </div>
            <div className="album__title--1">Danh sách các Album trước đó</div>
            <div className="album__row row2">
                <div className="home__results">
                    <div className="home__results--1">
                        {row1.map((item, itemIndex) => (
                            <AlbumThumbnail key={itemIndex} place={item} />
                        ))}
                    </div>
                    <div className="home__results--2">
                        {row2.map((item, itemIndex) => (
                            <AlbumThumbnail key={itemIndex} place={item} />
                        ))}
                    </div>
                    <div className="home__results--3">
                        {row3.map((item, itemIndex) => (
                            <AlbumThumbnail key={itemIndex} place={item} />
                        ))}
                    </div>
                    <div className="home__results--4">
                        {row4.map((item, itemIndex) => (
                            <AlbumThumbnail key={itemIndex} place={item} />
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
