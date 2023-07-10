import React, { useState, useEffect } from 'react';
import { Pagination, NativeSelect, InputLabel, FormControl } from '@mui/material';
import AlbumThumbnail from "../../components/album_thumbnail";
import img from "../../assets/imgs/slider_banner_1.png";
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import './css/Album.scss';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Skeleton from '@mui/material/Skeleton';

const Album = () => {
    const [albums, setAlbums] = useState([]);
    const [newAlbum, setNewAlbum] = useState('');
    const [row1, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);
    // const [row3, setRow3] = useState([]);
    // const [row4, setRow4] = useState([]);
    const [select, setSelect] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();
    const [value, setValue] = useState(dayjs('2022-04-17T15:30'));
    const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false)
    }, []);

    useEffect(() => {
        let start = 12 * (select - 1);
        let end = start + 12;
        if (end > albums.length) end = albums.length;
        let currents = albums.slice(start, end);
        let totalPages = Math.ceil(albums.length / 12);

        let row1 = currents.slice(0, 2);
        let row2 = currents.slice(2, 4);
        // let row3 = currents.slice(6, 9);
        // let row4 = currents.slice(9, 12);

        setRow1(row1);
        setRow2(row2);
        // setRow3(row3);
        // setRow4(row4);
        setTotalPages(totalPages);
    }, [albums, select]);
    useEffect(() => {
        console.log(isLoading)
    }, [isLoading])
    return (
        <div className="album">
            <div className="album-slide">
                Tạo Album, Chia sẻ khoảnh khắc
            </div>
            <Container maxWidth="lg">
                <div className="album-location">Album</div>
                <div className="album-wrapper">
                    <div className="album__col col1">
                        <h1>Thêm Album & Xem các chuyến đi</h1>
                        <div className="album__button__list">
                            <button className="album__button" onClick={handleAddAlbum}>
                                Thêm Album
                            </button>
                            <button className="album__button" onClick={handleTrip}>
                                Xem Trips
                            </button>
                        </div>
                        <h1>Sắp xếp</h1>
                        <FormControl fullWidth className="album-filter">
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">Tên tiêu đề</InputLabel>
                            <NativeSelect
                                defaultValue={1}
                            // onChange={handleChange}
                            >
                                <option value={1}>A-Z ASC</option>
                                <option value={2}>Z-A DASC</option>
                            </NativeSelect>
                        </FormControl>
                        <FormControl fullWidth className="album-filter">
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">Ngày tạo</InputLabel>
                            <NativeSelect
                                defaultValue={1}
                            // onChange={handleChange}
                            >
                                <option value={1}>Mới nhất</option>
                                <option value={2}>Cũ nhất</option>
                            </NativeSelect>
                        </FormControl>
                        <h1>Chọn ngày tạo</h1>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateTimePicker']}>
                                    <DateTimePicker
                                        label="Chọn ngày"
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className="album__col col2">
                        <div className="album__results">
                            {
                                isLoading === true ? <div>
                                    <div><Skeleton height="100%" /></div>
                                    <div><Skeleton height="100%" /></div>
                                </div> : <div className="album__results--1">
                                    {row1 && row1.map((item, itemIndex) => (
                                        <AlbumThumbnail key={itemIndex} place={item} />
                                    ))}
                                </div>
                            }
                            {
                                isLoading === true ? <div>
                                    <div><Skeleton height="100%" /></div>
                                    <div><Skeleton height="100%" /></div>
                                </div> : <div className="album__results--2">
                                    {row2 && row2.map((item, itemIndex) => (
                                        <AlbumThumbnail key={itemIndex} place={item} />
                                    ))}
                                </div>
                            }
                            {/* <div className="album__results--3">
                            {row3.map((item, itemIndex) => (
                                <AlbumThumbnail key={itemIndex} place={item} />
                            ))}
                        </div>
                        <div className="album__results--4">
                            {row4.map((item, itemIndex) => (
                                <AlbumThumbnail key={itemIndex} place={item} />
                            ))}
                        </div> */}
                            <div className="album__results--pagination">
                                <Pagination count={totalPages} onChange={handlePageChange} showFirstButton showLastButton />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Album;
