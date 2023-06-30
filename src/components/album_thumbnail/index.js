import { FaMapMarkerAlt, FaComments } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Rating } from "@mui/material";

const AlbumThumbnail = (props) => {
    let place = props.place;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/viewalbum');
    };
    return (
        <div className="albumthumbnail" onClick={handleClick}>
            <div className="albumthumbnail__img">
                <img src={place.img} alt="Ảnh tạm"></img>
            </div>
            <div className="albumthumbnail__intro">
                <div className="albumthumbnail__rate">
                    <Rating name="size-large" defaultValue={place.rate} precision={0.5} size="large" readOnly />
                </div>
                <div className="albumthumbnail__title">
                    {place.title}
                </div>
            </div>
        </div>
    );
}
export default AlbumThumbnail;