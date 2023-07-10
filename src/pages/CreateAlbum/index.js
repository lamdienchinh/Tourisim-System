import React, { useState } from 'react';
import { TextField, Paper, Rating, Checkbox, Typography, ImageList, ImageListItem } from "@mui/material";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./css/CreateAlbum.scss"
import Container from '@mui/material/Container';
// import axios from 'axios';
import img from "../../assets/imgs/place1.png"

const CreateAlbum = () => {
    const [places, setPlaces] = useState([
        {
            id: 1,
            title: 'Place 1',
            selected: false,
            trips: [
                { id: 1, title: 'Trip 1', selected: false, time: '2023-07-01', rating: 0, images: [] },
                { id: 2, title: 'Trip 2', selected: false, time: '2023-07-02', rating: 0, images: [] },
            ],
        },
        {
            id: 2,
            title: 'Place 2',
            selected: false,
            trips: [
                { id: 3, title: 'Trip 3', selected: false, time: '2023-07-03', rating: 0, images: [] },
                { id: 4, title: 'Trip 4', selected: false, time: '2023-07-04', rating: 0, images: [] },
            ],
        },
        {
            id: 3,
            title: 'Place 3',
            selected: false,
            trips: [
                { id: 5, title: 'Trip 5', selected: false, time: '2023-07-05', rating: 0, images: [] },
                { id: 6, title: 'Trip 6', selected: false, time: '2023-07-06', rating: 0, images: [] },
            ],
        },
    ]);

    const [selectedTrips, setSelectedTrips] = useState([]);
    const [currentPlace, setCurrentPlace] = useState(null);
    const [currentTrip, setCurrentTrip] = useState(null);
    const [imgs] = useState([img, img, img, img]);
    const [albumData, setAlbumData] = useState([]);

    const handlePlaceClick = (place) => {
        if (place === currentPlace) {
            setCurrentPlace(null);
        } else {
            setCurrentPlace(place);
        }
    };

    const handleTripClick = async (event, trip) => {
        // if (trip === currentTrip) {
        //     setCurrentTrip(null);
        // } else {
        //     setCurrentTrip(trip);
        // }
        setCurrentTrip(trip);
    };

    // const handleCheckboxChange = async (event, trip) => {
    //     setCurrentTrip(trip);
    //     console.log("Trip", trip)
    //     const isChecked = event.target.checked;
    //     const updatedPlaces = places.map((place) => ({
    //         ...place,
    //         trips: place.trips.map((t) =>
    //             t.title === trip.title ? { ...t, selected: isChecked } : t
    //         ),
    //     }));
    //     setPlaces(updatedPlaces);
    //     console.log("Update Place", updatedPlaces)
    //     if (isChecked) {
    //         setSelectedTrips([...selectedTrips, trip]);
    //     } else {
    //         const updatedSelectedTrips = selectedTrips.filter(
    //             (selectedTrip) => selectedTrip.id !== trip.id
    //         );
    //         console.log("?", updatedSelectedTrips)
    //         setSelectedTrips(updatedSelectedTrips);
    //     }
    //     console.log("Check", isChecked)
    //     console.log("C Place", currentPlace);
    //     console.log("S Trip", selectedTrips);
    //     console.log("C Trip", currentTrip);
    //     if (currentPlace && currentTrip) {
    //         console.log("Run")
    //         const { title, thoughts, time, rating } = currentTrip;
    //         console.log({ currentPlace, title, thoughts, time, rating, imgs })
    //         setAlbumData([...albumData, { currentPlace, title, thoughts, time, rating, imgs }]);
    //         setCurrentPlace(null);
    //         setCurrentTrip(null);
    //     }
    // };

    const handleCheckboxChange = async (event, trip) => {
        setCurrentTrip(trip)
        const updateTrip = async (isChecked) => {
            const updatedPlaces = places.map((place) => ({
                ...place,
                trips: place.trips.map((t) =>
                    t.title === trip.title ? { ...t, selected: isChecked } : t
                ),
            }));
            setPlaces(updatedPlaces);
        };
        const isChecked = event.target.checked;
        await updateTrip(isChecked);
        if (isChecked) {
            setSelectedTrips([...selectedTrips, trip]);
        } else {
            const updatedSelectedTrips = selectedTrips.filter(
                (selectedTrip) => selectedTrip.id !== trip.id
            );
            const updatedAlbum = albumData.filter(
                (selectedTrip) => selectedTrip.id !== trip.id
            )
            setSelectedTrips(updatedSelectedTrips);
            setAlbumData(updatedAlbum)
        }
        // console.log("Check", isChecked);
        // console.log("C Place", currentPlace);
        // console.log("S Trip", selectedTrips);
        // console.log("C Trip", currentTrip);
        if (currentPlace && trip) {
            const { title, thoughts, time, rating, id } = trip;
            setAlbumData([...albumData, { id, currentPlace, title, thoughts, time, rating, imgs }]);
            setCurrentPlace(null);
            setCurrentTrip(null);
        }
    };

    // const [selectedImages, setSelectedImages] = useState([]);
    // const uploadImagesToCloudinary = async (files) => {
    //     // Push all the axios request promise into a single array
    //     try {
    //         let result = []
    //         for (const file of files) {
    //             const formData = new FormData();
    //             formData.append("file", file);
    //             formData.append("upload_preset", "x98iyyfc");
    //             let temp = await axios.post("https://api.cloudinary.com/v1_1/dfoj6menm/image/upload", formData, {
    //                 headers: { "X-Requested-With": "XMLHttpRequest" },
    //             })
    //             result.push(temp.data.secure_url);
    //             // console.log(temp);
    //             setImgs((prevImgs) => [...prevImgs, temp?.data?.secure_url]);
    //         }
    //         return result;
    //     }
    //     catch (err) {
    //         console.log("Không thể tải ảnh", err)
    //         toast.error('Không thể tải ảnh')
    //     }
    // }

    // const handleImageUpload = async (event) => {
    //     const files = event.target.files;
    //     setSelectedImages(files)
    // };

    // const handleSave = async () => {
    //     const uploadedImages = await uploadImagesToCloudinary(selectedImages);
    //     setCurrentTrip({ ...currentTrip, images: imgs })
    //     if (uploadedImages)
    //         console.log(uploadedImages)
    //     console.log("tripdata", { ...currentTrip, images: uploadedImages });
    //     // if (currentPlace && currentTrip) {
    //     //     const { title, thoughts, image } = currentPlace;
    //     //     const { tripTitle, time, rating } = currentTrip;
    //     //     setAlbumData([...albumData, { title, thoughts, image, tripTitle, time, rating, imgs }]);
    //     //     setCurrentPlace(null);
    //     //     setCurrentTrip(null);
    //     // }
    //     toast.success('Lưu cảm nghĩ thành công !')
    // };

    const handleCreateAlbum = async (event) => {
        event.preventDefault();
        console.log(selectedTrips)
        console.log(albumData)
        toast.success('Tạo album mới thành công !')
    };
    return (
        <div className="createalbum">
            <div className="createalbum-slide">Tạo Album của riêng bạn</div>
            <Container maxWidth="lg">
                <div className="createalbum__left">
                    <div className="createalbum__header">
                        <div className="createalbum-address">
                            <span className="createalbum-location" onClick={() => window.location.href = '/album'}>Album</span>
                            <span> / CreateAlbum</span>
                        </div>
                    </div>
                    <h2>Create Album</h2>
                    <div className="places-list">
                        <h3>Places</h3>
                        <ul>
                            {places.map((place) => (
                                <div
                                    key={place.title}
                                    className={place.selected ? 'selected' : ''}
                                >
                                    {place.title}
                                    <button className="place-button" onClick={() => handlePlaceClick(place)}>Xem các chuyến đi</button>
                                    {place === currentPlace && (
                                        <div className="trips-list">
                                            {place.trips.map((trip) => (
                                                <div
                                                    key={trip.title}
                                                    className={trip === currentTrip ? 'selected' : ''}
                                                    onClick={() => setCurrentTrip(trip)}
                                                >
                                                    {trip.title} - {trip.time}
                                                    <button className="trip-button" onClick={(event) => handleTripClick(event, trip)}>Xem chi tiết</button>
                                                    <Checkbox
                                                        checked={trip.selected}
                                                        onChange={(e) =>
                                                            handleCheckboxChange(e, trip)
                                                        }
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </div>

                    {currentTrip && (
                        <div className="form-container">
                            <h3>{currentTrip.title}</h3>
                            <div>
                                <Typography>Thời gian: {currentTrip.time} </Typography>
                                <label>
                                    Rating:
                                    <Rating
                                        name="rating"
                                        value={currentTrip.rating}
                                        onChange={(event, newValue) =>
                                            setCurrentTrip({ ...currentTrip, rating: newValue })
                                        }
                                        readOnly
                                    />
                                </label>
                                <label>
                                    <TextField
                                        disabled
                                        id="filled-size-normal"
                                        label="TIÊU ĐỀ"
                                        size='medium'
                                        value={currentTrip.title}
                                        onChange={(e) =>
                                            setCurrentTrip({ ...currentTrip, title: e.target.value })
                                        }
                                    />
                                </label>
                                <label>
                                    <TextField
                                        disabled
                                        id="outlined-controlled"
                                        label="CẢM NGHĨ"
                                        value={`${currentTrip.thoughts} Hello`}
                                        multiline
                                        onChange={(e) =>
                                            setCurrentTrip({ ...currentTrip, thoughts: e.target.value })
                                        }
                                    />
                                </label>
                                <label>
                                    Image:
                                    {/* <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Input
                                                type="file"
                                                inputProps={{ multiple: true }}
                                                onChange={handleImageUpload}
                                                text="Nhập ảnh"
                                            />
                                        </Grid>
                                    </Grid> */}
                                    <ImageList sx={{ width: 800, height: 450 }} cols={3} rowHeight={164}>
                                        {imgs && imgs.map((image, index) => (
                                            <ImageListItem key={index}>
                                                <Paper>
                                                    <img
                                                        src={`${image}?w=164&h=164&fit=crop&auto=format`}
                                                        srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                        alt={`Hình ${index}`}
                                                        loading="lazy"
                                                        style={{ width: '100%' }}
                                                    />
                                                </Paper>
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                    {/* <Grid container spacing={2}>
                                        {selectedImages && Array.from(selectedImages).map((image, index) => (
                                            <Grid item xs={3} key={index}>
                                                <Paper>
                                                    <img src={URL.createObjectURL(image)} alt={`Image ${index}`} style={{ width: "100%" }} />
                                                </Paper>
                                            </Grid>
                                        ))}
                                    </Grid> */}
                                </label>
                            </div>
                            {/* <button onClick={handleSave}>Lưu</button> */}
                        </div>
                    )}
                </div>
                <div className="createalbum__right">
                    <h3>Selected Places</h3>
                    <button onClick={(event) => handleCreateAlbum(event)}>Tạo Album</button>
                    <div className="selected-places">
                        <h3>Các trips đã chọn</h3>
                        {selectedTrips.map((trip) => (
                            <div key={trip.title}>{trip.title}</div>
                        ))}
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default CreateAlbum;