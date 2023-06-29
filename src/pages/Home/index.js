// import SliderBanner from "../../components/slider_banner";
import PlaceThumbnail from "../../components/place_thumbnail";
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { Pagination } from '@mui/material';
import img from "../../assets/imgs/slider_banner_1.png";

//import scss
import "./Home.scss"


const Home = () => {
    const [inputsearch, setInputSearch] = useState("");
    const [allplaces, setAllPlaces] = useState([]);
    const [places, setPlaces] = useState([]);
    const [select, setSelect] = useState(1);
    //Lấy place để hiển thị


    //handle chọn trang
    const handlePageChange = (event, number) => {
        setSelect(number);
    }

    //Tính số trang hiển thị
    // let start = 12 * (select-1);
    // let end = start + 12;
    // if (end > allplaces.length) end = allplaces.length;
    // let currents = allplaces.slice(start, end);
    // let totalPages = Math.ceil((allplaces.length) / 12);

    //Cho mẫu một chỗ, một place thumbnail gồm title, img, số sao, địa chỉ, số cmt
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
        <div className="home">
            <div className="home__slides">
                <div className="home__slides--searchbar" >
                    <input type="search" onChange={(event) => setInputSearch(event.target.value)} placeholder="Search here ..." />
                    <FaSearch className="search-icon"></FaSearch>
                </div>
            </div>
            <div className="home__options">
                <div className="home__options--danhlam">
                    Danh lam thắng cảnh
                </div>
                <div className="home__options--ditich">
                    Di tích
                </div>
                <div className="home__options--amthuc">
                    Ẩm thực
                </div>
                <div className="home__options--giaitri">
                    Vui chơi, giải trí
                </div>
                <div className="home__options--noio">
                    Nơi ở
                </div>
            </div>
            <div className="home__results">
                <div className="home__results--1">
                    {row1 && row1.map((item, itemIndex) => (
                        <PlaceThumbnail place={item}></PlaceThumbnail>
                    ))}
                </div>
                <div className="home__results--2">
                    {row2 && row2.map((item, itemIndex) => (
                        <PlaceThumbnail place={item}></PlaceThumbnail>
                    ))}
                </div>
                <div className="home__results--3">
                    {row3 && row3.map((item, itemIndex) => (
                        <PlaceThumbnail place={item}></PlaceThumbnail>
                    ))}
                </div>
                <div className="home__results--4">
                    {row4 && row4.map((item, itemIndex) => (
                        <PlaceThumbnail place={item}></PlaceThumbnail>
                    ))}
                </div>
                <div className="home__results--pagination">
                    <Pagination count={totalPages} onChange={handlePageChange} showFirstButton showLastButton />
                </div>
            </div>
        </div>
    );
}
export default Home;