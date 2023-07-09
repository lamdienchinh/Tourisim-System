// import SliderBanner from "../../components/slider_banner";
import PlaceThumbnail from "../../components/place_thumbnail";
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import types from "../../constants";
import Container from '@mui/material/Container';
// import { getUserData } from '../../state/selectors';
// import { useSelector } from 'react-redux';
//import scss
import "./css/Home.scss"


const Home = () => {
    // let walletAddress = useSelector(getUserData);

    const [inputsearch, setInputSearch] = useState("");

    const [allplaces, setAllPlaces] = useState([]);
    const [select, setSelect] = useState(1);
    const [getplaces, setGetPlaces] = useState(0);
    const [places, setPlaces] = useState([]);
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
        let temp = types.types;
        const array = Array.from({ length: 50 }, (_, index) =>
            temp[Math.floor(index / 10)]
        ).flatMap((placeType, index) => ({
            ...placeType
        }));
        setAllPlaces(array);
        setPlaces(array);
    }, []);

    useEffect(() => {
        const start = 12 * (select - 1);
        let end = start + 12;
        if (end > places.length) end = places.length;
        const temp = places.slice(start, end);

        const total = Math.ceil(places.length / 12);

        const row1 = temp.slice(0, 3);
        const row2 = temp.slice(3, 6);
        const row3 = temp.slice(6, 9);
        const row4 = temp.slice(9, 12);

        setRow1(row1);
        setRow2(row2);
        setRow3(row3);
        setRow4(row4);
        setTotalPages(total);
    }, [select, places]);

    const filter = (value) => {
        let currents = allplaces;
        if (getplaces !== value) {
            setGetPlaces(value);
            switch (value) {
                case 1:
                    currents = allplaces.filter(item => item.type === 'danh lam')
                    setPlaces(currents);
                    break;
                case 2:
                    currents = allplaces.filter(item => item.type === 'di tich')
                    setPlaces(currents);
                    break;
                case 3:
                    currents = allplaces.filter(item => item.type === 'am thuc')
                    setPlaces(currents);
                    break;
                case 4:
                    currents = allplaces.filter(item => item.type === 'giai tri')
                    setPlaces(currents);
                    break;
                case 5:
                    currents = allplaces.filter(item => item.type === 'noi o')
                    setPlaces(currents);
                    break;
                default:
                    break;
            }
        }
        else {
            setGetPlaces(0);
            setPlaces(allplaces);
        }
    }

    const search = (keyword) => {
        let data = allplaces;
        const filteredData = data.filter((item) => {
            // Chuyển đổi tiêu đề và địa chỉ thành chữ thường để tìm kiếm không phân biệt hoa thường
            const lowerCaseTitle = item.title.toLowerCase();
            const lowerCasePlace = item.address.toLowerCase();
            const lowerCaseKeyword = keyword.toLowerCase();

            // Sử dụng indexOf() để kiểm tra sự xuất hiện của từ khóa trong tiêu đề
            let index = lowerCaseTitle.indexOf(lowerCaseKeyword);
            let index2 = lowerCasePlace.indexOf(lowerCaseKeyword);
            return (index !== -1) || (index2 !== -1);
        });
        setPlaces(filteredData);
    };
    return (
        <div className="home">
            <div className="home__slides">
                <div className="home__slides--searchbar" >
                    <div className="home__searchbar__title">Bạn muốn đi đâu ?</div>
                    <input type="search" onChange={(event) => setInputSearch(event.target.value)} placeholder="Search here ..." />
                    <FaSearch className="search-icon" onClick={() => search(inputsearch)}></FaSearch>
                </div>
            </div>
            <Container maxWidth="lg">
                <div className="home__options">
                    <div className={`home__options--danhlam ${getplaces === 1 ? 'home__options--selected' : ''}`} onClick={() => filter(1)}>
                        Danh lam
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
                    <div className="home__results--pagination">
                        <Pagination count={totalPages} onChange={handlePageChange} showFirstButton showLastButton />
                    </div>
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
                </div>
            </Container>
        </div>
    );
}
export default Home;
