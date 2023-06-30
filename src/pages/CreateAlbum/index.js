import React, { useState } from 'react';
import { Grid, Input, Paper, TextField } from "@mui/material";
import "./CreateAlbum.scss"

const CreateAlbum = () => {
    const [places, setPlaces] = useState([
        { title: 'Place 1', selected: false },
        { title: 'Place 2', selected: false },
        { title: 'Place 3', selected: false }
    ]);
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [currentPlace, setCurrentPlace] = useState(null);
    const [albumData, setAlbumData] = useState([]);

    const handlePlaceClick = (place) => {
        setCurrentPlace(place);
    };

    const handleSave = () => {
        if (currentPlace) {
            const { title, thoughts, image } = currentPlace;
            setAlbumData([...albumData, { title, thoughts, image }]);
            setCurrentPlace(null);
        }
    };

    const handleCheckboxChange = (event, place) => {
        const isChecked = event.target.checked;
        const updatedPlaces = places.map((p) =>
            p.title === place.title ? { ...p, selected: isChecked } : p
        );
        setPlaces(updatedPlaces);

        if (isChecked) {
            setSelectedPlaces([...selectedPlaces, place]);
        } else {
            const updatedSelectedPlaces = selectedPlaces.filter(
                (selectedPlace) => selectedPlace.title !== place.title
            );
            setSelectedPlaces(updatedSelectedPlaces);
        }
    };

    const handleCreateAlbum = () => {
        console.log(selectedPlaces);
        // Perform album creation or other actions with selectedPlaces
    };

    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = event.target.files;
        const selectedImagesArray = Array.from(files);
        setSelectedImages(selectedImagesArray);
    };

    return (
        <div className="createalbum">
            <div className="createalbum__left">
                <div className="createalbum__header">
                    <button onClick={() => window.location.href = '/album'}>Back</button>
                </div>
                <h2>Create Album</h2>
                <div className="places-list">
                    <h3>Places</h3>
                    <ul>
                        {places.map((place) => (
                            <li
                                key={place.title}
                                onClick={() => handlePlaceClick(place)}
                                className={place.selected ? 'selected' : ''}
                            >
                                {place.title}
                                <input
                                    type="checkbox"
                                    checked={place.selected}
                                    onChange={(e) => handleCheckboxChange(e, place)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {currentPlace && (
                    <div className="form-container">
                        <h3>Add Content for {currentPlace.title}</h3>
                        <form>
                            <label>
                                {/* Title: */}
                                <TextField
                                    id="filled-size-normal"
                                    label="TIÊU ĐỀ"
                                    size ='medium'
                                    value={currentPlace.title}
                                    onChange={(e) =>
                                        setCurrentPlace({ ...currentPlace, title: e.target.value })
                                    }
                                />
                                {/* <input
                                    type="text"
                                    value={currentPlace.title}
                                    onChange={(e) =>
                                        setCurrentPlace({ ...currentPlace, title: e.target.value })
                                    }
                                /> */}
                            </label>
                            <label>
                                {/* Thoughts: */}
                                {/* <textarea
                                    value={currentPlace.thoughts}
                                    onChange={(e) =>
                                        setCurrentPlace({ ...currentPlace, thoughts: e.target.value })
                                    }
                                /> */}
                                <TextField
                                    id="outlined-controlled"
                                    label="CẢM NGHĨ"
                                    value={currentPlace.thoughts}
                                    multiline
                                    onChange={(e) =>
                                        setCurrentPlace({ ...currentPlace, thoughts: e.target.value })
                                    }
                                />
                            </label>
                            <label>
                                Image:
                                {/* <input
                                type="text"
                                value={currentPlace.image}
                                onChange={(e) =>
                                    setCurrentPlace({ ...currentPlace, image: e.target.value })
                                }
                            /> */}

                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Input type="file" inputProps={{ multiple: true }} onChange={handleImageUpload} />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    {selectedImages.map((image, index) => (
                                        <Grid item xs={3} key={index}>
                                            <Paper>
                                                <img src={URL.createObjectURL(image)} alt={`Image ${index}`} style={{ width: "100%" }} />
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </label>
                        </form>
                        <button onClick={handleSave}>Save</button>
                    </div>
                )}
            </div>
            <div className="createalbum__right">
                <h3>Selected Places</h3>
                <button onClick={handleCreateAlbum}>Create New Album</button>
                <div className="selected-places">
                    <ul>
                        {selectedPlaces.map((place) => (
                            <li key={place.title}>{place.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CreateAlbum;