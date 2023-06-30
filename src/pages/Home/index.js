// import SliderBanner from "../../components/slider_banner";
import PlaceThumbnail from "../../components/place_thumbnail";
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { Pagination } from '@mui/material';
import img from "../../assets/imgs/slider_banner_1.png";
import { getUserData } from '../../state/selectors';
import { useSelector } from 'react-redux';
import axios from "axios"
//import scss
import "./Home.scss"


const Home = () => {
    let walletAddress = useSelector(getUserData);

    const [inputsearch, setInputSearch] = useState("");


    const [allplaces, setAllPlaces] = useState([]);
    const [select, setSelect] = useState(1);
    const [getplaces, setGetPlaces] = useState(0);
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

    const types = [
        {
            type: 'danh lam',
            title: 'Danh lam',
            img: img,
            rate: 5,
            address: 'ADDRESS',
            comment: 'REVIEW'
        },
        {
            type: 'di tich',
            title: 'Di tích',
            img: img,
            rate: 5,
            address: 'ADDRESS',
            comment: 'REVIEW'
        },
        {
            type: 'am thuc',
            title: 'Ẩm thực',
            img: img,
            rate: 5,
            address: 'ADDRESS',
            comment: 'REVIEW'
        },
        {
            type: 'giai tri',
            title: 'Giải trí',
            img: img,
            rate: 5,
            address: 'ADDRESS',
            comment: 'REVIEW'
        },
        {
            type: 'noi o',
            title: 'Nơi ở',
            img: img,
            rate: 5,
            address: 'ADDRESS',
            comment: 'REVIEW'
        }
    ];

    const array = Array.from({ length: 50 }, (_, index) =>
        types[Math.floor(index / 10)]
    ).flatMap((placeType, index) => ({
        ...placeType,
        title: `${placeType.title} ${index % 10 + 1}`
    }));
    // const array = Array.from({ length: 32 }, () => ({ ...temp }));
    const [places, setPlaces] = useState(array);

    let start = 12 * (select - 1);
    let end = start + 12;
    if (end > places.length) end = places.length;
    let temp = places.slice(start, end);

    let totalPages = Math.ceil((places.length) / 12);

    let row1 = temp.slice(0, 3);
    let row2 = temp.slice(3, 6);
    let row3 = temp.slice(6, 9);
    let row4 = temp.slice(9, 12);

    let currents;
    const filter = (value) => {
        if (getplaces != value) {
            setGetPlaces(value);
            switch (value) {
                case 1:
                    currents = array.filter(item => item.type === 'danh lam')
                    setPlaces(currents);
                    break;
                case 2:
                    currents = array.filter(item => item.type === 'di tich')
                    setPlaces(currents);
                    break;
                case 3:
                    currents = array.filter(item => item.type === 'am thuc')
                    setPlaces(currents);
                    break;
                case 4:
                    currents = array.filter(item => item.type === 'giai tri')
                    setPlaces(currents);
                    break;
                case 5:
                    currents = array.filter(item => item.type === 'noi o')
                    setPlaces(currents);
                    break;
                default:
                    break;
            }
        }
        else {
            setGetPlaces(0);
            setPlaces(array);
        }
    }

    const search = (keyword) => {
        let data = array;
        const filteredData = data.filter((item) => {
            // Chuyển đổi tiêu đề và từ khóa tìm kiếm về chữ thường để tìm kiếm không phân biệt hoa thường
            const lowerCaseTitle = item.title.toLowerCase();
            const lowerCaseKeyword = keyword.toLowerCase();

            // Sử dụng indexOf() để kiểm tra sự xuất hiện của từ khóa trong tiêu đề
            return lowerCaseTitle.indexOf(lowerCaseKeyword) !== -1;
        });
        setPlaces(filteredData);
    }
    return (
        <div className="home">
            <div className="home__slides">
                <div className="home__slides--searchbar" >
                    <input type="search" onChange={(event) => setInputSearch(event.target.value)} placeholder="Search here ..." />
                    <FaSearch className="search-icon" onClick={()=>search(inputsearch)}></FaSearch>
                </div>
            </div>
            <div className="home__options">
                <div className={`home__options--danhlam ${getplaces === 1 ? 'home__options--selected' : ''}`} onClick={() => filter(1)}>
                    Danh lam thắng cảnh
                </div>
                <div className={`home__options--ditich ${getplaces === 2 ? 'home__options--selected' : ''}`} onClick={() => filter(2)}>
                    Di tích
                </div>
                <div className={`home__options--amthuc ${getplaces === 3 ? 'home__options--selected' : ''}`} onClick={() => filter(3)}>
                    Ẩm thực
                </div>
                <div className={`home__options--giaitri ${getplaces === 4 ? 'home__options--selected' : ''}`} onClick={() => filter(4)}>
                    Vui chơi, giải trí
                </div>
                <div className={`home__options--noio ${getplaces === 5 ? 'home__options--selected' : ''}`} onClick={() => filter(5)}>
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