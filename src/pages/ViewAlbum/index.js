import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import './css/ViewAlbum.scss';

const ViewAlbum = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };
    let navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/album");
    };

    const locations = [
        {
            id: 1,
            name: 'Địa điểm 1',
            description: 'Cảm nghĩ địa điểm 1...',
            image: 'url-to-image-1',
        },
        {
            id: 2,
            name: 'Địa điểm 2',
            description: 'Cảm nghĩ địa điểm 2...',
            image: 'url-to-image-2',
        },
        // Các địa điểm khác...
    ];

    return (
        <div className="viewalbum">
            <Container maxWidth="lg">
                <div className="viewalbum__header">
                    <button className="viewalbum__back-button" onClick={handleGoBack}>
                        Quay lại
                    </button>
                    <h2 className="viewalbum__album-title">Tên Cuốn Album</h2>
                </div>
                <div className="viewalbum__body">
                    <div className="viewalbum__sidebar">
                        <h2 className="viewalbum__title">Danh sách địa điểm</h2>
                        <ul className="viewalbum__location-list">
                            {locations.map((location) => (
                                <li
                                    key={location.id}
                                    className={`viewalbum__location-item ${selectedLocation?.id === location.id ? 'active' : ''}`}
                                    onClick={() => handleLocationClick(location)}
                                >
                                    {location.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="viewalbum__content">
                        {selectedLocation ? (
                            <div className="viewalbum__location-details">
                                <h3 className="viewalbum__location-name">{selectedLocation.name}</h3>
                                <p className="viewalbum__location-description">{selectedLocation.description}</p>
                                <img src={selectedLocation.image} alt={selectedLocation.name} className="viewalbum__location-image" />
                            </div>
                        ) : (
                            <p className="viewalbum__empty-message">Chọn một địa điểm để xem thông tin chi tiết</p>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ViewAlbum;