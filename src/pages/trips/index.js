import React, { useState, useEffect } from 'react';
import { Container, Pagination, Modal, Box, Typography, ImageList, ImageListItem, Rating } from '@mui/material';
import Trip from "../../components/trip";
import trips from "../../constants";
import "./css/Trips.scss";

const Trips = () => {

    const [allTrips, setAllTrips] = useState([]);
    const [select, setSelect] = useState(1);
    const [selectTrip, setSelectTrip] = useState();
    const [style, setStyle] = useState()
    // const [getplace, setGetPlaces] = useState(0);
    // const [trips, setTrips] = useState([]);
    const [row1, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);
    const [row3, setRow3] = useState([]);
    const [row4, setRow4] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    //Lấy place để hiển thị

    //handle chọn trang
    const handlePageChange = (event, number) => {
        setSelect(number);
    }

    useEffect(() => {
        var style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        };
        let array = Array.from({ length: 32 }, () => ({ ...trips.trips }));
        setAllTrips(array);
        setStyle(style);
        // console.log(trips);
        // setTrips();
    }, []);

    useEffect(() => {
        let start = 12 * (select - 1);
        let end = start + 12;
        if (end > allTrips.length) end = allTrips.length;
        const temp = allTrips.slice(start, end);

        const totalPages = Math.ceil(allTrips.length / 12);

        const row1 = temp.slice(0, 3);
        const row2 = temp.slice(3, 6);
        const row3 = temp.slice(6, 9);
        const row4 = temp.slice(9, 12);

        setRow1(row1);
        setRow2(row2);
        setRow3(row3);
        setRow4(row4);
        setTotalPages(totalPages);
    }, [select, allTrips]);

    const [open, setOpen] = useState(false);
    const handleOpen = (trip) => {
        setSelectTrip(trip);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    return (
        <Container>
            <div className="trips">
                <div className="trips__results--1">
                    {row1 && row1.map((item, itemIndex) => (
                        <div onClick={() => handleOpen(item)}> <Trip trip={item}></Trip></div>
                    ))}
                </div>
                <div className="trips__results--2">
                    {row2 && row2.map((item, itemIndex) => (
                        <div onClick={() => handleOpen(item)}> <Trip trip={item}></Trip></div>
                    ))}
                </div>
                <div className="trips__results--3">
                    {row3 && row3.map((item, itemIndex) => (
                        <div onClick={() => handleOpen(item)}> <Trip trip={item}></Trip></div>
                    ))}
                </div>
                <div className="trips__results--4">
                    {row4 && row4.map((item, itemIndex) => (
                        <div onClick={() => handleOpen(item)}> <Trip trip={item}></Trip></div>
                    ))}
                </div>
                <div className="trips__results--pagination">
                    <Pagination count={totalPages} onChange={handlePageChange} showFirstButton showLastButton />
                </div>
            </div>
            <Modal
                classes="trip-modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h1">
                        Địa điểm: {selectTrip?.place}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="h4">
                        Tiêu đề: {selectTrip?.title}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h6">
                        Thời gian: {selectTrip?.time}
                    </Typography>
                    <Rating name="size-large" defaultValue={selectTrip?.rating} precision={0.5} size="large" readOnly />
                    <Typography paragraph>
                        {selectTrip?.description}
                    </Typography>
                    <ImageList sx={{ width: 800, height: 450 }} cols={3} rowHeight={164}>
                        {selectTrip?.images.map((item) => (
                            <ImageListItem key={item.url}>
                                <img
                                    src={`${item.url}?w=161&fit=crop&auto=format`}
                                    srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    alt={`Đây là ảnh thứ ${item.id}`}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Modal>
        </Container>

    );
};

export default Trips;