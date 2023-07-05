import img from "../../assets/imgs/angiang.webp"
import "./css/PlaceInfor.scss"
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { useNavigate } from 'react-router-dom';
import { Rating, NativeSelect, FormControl, InputLabel } from '@mui/material';
import ReviewChart from "../../components/review_chart";
import { useState } from "react";
import Review from "../../components/review";
import Container from '@mui/material/Container';

const PlaceInfor = () => {
    const reviews = [
        { rating: 1, count: 10 },
        { rating: 2, count: 20 },
        { rating: 3, count: 30 },
        { rating: 4, count: 15 },
        { rating: 5, count: 25 },
    ];
    const navigate = useNavigate();
    // Xử lý Slideshow
    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src={img} onDragStart={handleDragStart} role="presentation" />,
        <img src={img} onDragStart={handleDragStart} role="presentation" />,
        <img src={img} onDragStart={handleDragStart} role="presentation" />,
    ];

    const handleClick = () => {
        navigate('/placeinfor');
    };

    //Xử lý filter
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div className="placeinfor">
            <div className="placeinfor__slide">
                <img src={img} alt="Ảnh nền"></img>
                <div className="placeinfor__content">
                    <div className="placeinfor__title">
                        Rừng Tràm Trà Sư
                    </div>
                </div>
                <div className="placeinfor__suggest">
                    <div className="placeinfor__suggest--1">
                        <div>
                            <img src={img} alt="Ảnh đề xuất" onClick={handleClick}></img>
                        </div>
                        <div className="placeinfor__suggest--infor">
                            <div>
                                ĐI ĐẾN ĐỊA ĐIỂM
                            </div>
                            <div>
                                Chùa Hang
                            </div>
                        </div>
                    </div>
                    <div className="placeinfor__suggest--2">
                        <div>
                            <img src={img} alt="Ảnh đề xuất" onClick={handleClick}></img>
                        </div>
                        <div className="placeinfor__suggest--infor">
                            <div>
                                ĐI ĐẾN ĐỊA ĐIỂM
                            </div>
                            <div>
                                Chùa Hang
                            </div>
                        </div>
                    </div>
                    <div className="placeinfor__suggest--3">
                        <div>
                            <img src={img} alt="Ảnh đề xuất" onClick={handleClick}></img>
                        </div>
                        <div className="placeinfor__suggest--infor">
                            <div>
                                ĐI ĐẾN ĐỊA ĐIỂM
                            </div>
                            <div>
                                Chùa Hang
                            </div>
                        </div>
                    </div>
                    <div className="placeinfor__suggest--4">
                        <div>
                            <img src={img} alt="Ảnh đề xuất" onClick={handleClick}></img>
                        </div>
                        <div className="placeinfor__suggest--infor">
                            <div>
                                ĐI ĐẾN ĐỊA ĐIỂM
                            </div>
                            <div>
                                Chùa Hang
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container maxWidth="lg">
                <div className="placeinfor__intro">
                    <div className="placeinfor__imgs">
                        <AliceCarousel mouseTracking autoWidth={true} autoHeight={true} animationDuration={1000} items={items} autoPlayInterval={1000} autoPlay={true} infinite={true} />
                    </div>
                    <div className="placeinfor__rate">
                        <div>
                            <div className="placeinfor__rate--title">
                                Đánh giá
                            </div>
                            <div className="placeinfor__rate--star">
                                <Rating name="size-large" defaultValue={4.5} precision={0.5} size="large" readOnly />
                            </div>
                        </div>
                        <div className="placeinfor__rate--content">
                            <div style={{ fontSize: '40px', fontWeight: '500' }}>
                                TIÊU ĐỀ
                            </div>
                            <div>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="placeinfor__review">
                    <div className="placeinfor__rv--1">
                        Ratings & Reviews ({273})
                    </div>
                    <div className="placeinfor__rv--2">
                        Summary
                    </div>
                    <div className="placeinfor__chart">
                        <ReviewChart />
                    </div>
                    <div className="placeinfor__filter">
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Sắp xếp theo
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={1}>Số sao tăng dần</option>
                                <option value={2}>Số sao giảm dần</option>
                                <option value={3}>Thời gian gần nhất</option>
                                <option value={4}>Thời gian xa nhất</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <div className="placeinfor__reviewlist">
                        <div className="placeinfor__review">
                            <Review></Review>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PlaceInfor;