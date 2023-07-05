import React from 'react';
import './css/Intro.scss';
import 'react-alice-carousel/lib/alice-carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/imgs/doanhnghiep.jpg"
import Slider from "react-slick";
import Container from '@mui/material/Container';
import { Avatar } from "@mui/material"
// import { ImageList, ImageListItem, Paper } from "@mui/material";
import chinh from "../../assets/imgs/chinh.jpg";
import duy from "../../assets/imgs/duy.jpg";

const Intro = () => {
    // Dữ liệu của slider banner
    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src={img} onDragStart={handleDragStart} role="presentation" />,
        <img src={img} onDragStart={handleDragStart} role="presentation" />,
        <img src={img} onDragStart={handleDragStart} role="presentation" />,
    ];

    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "0px"
    };
    // Dữ liệu của danh sách nhân viên
    // const employees = [
    //     {
    //         name: 'John Doe',
    //         position: 'CEO',
    //         image: 'employee1.jpg',
    //     },
    //     {
    //         name: 'Jane Smith',
    //         position: 'CTO',
    //         image: 'employee2.jpg',
    //     },
    //     // Thêm các nhân viên khác...
    // ];
    let listimg = [chinh, duy];
    // Dữ liệu thông tin công ty
    const companyInfo = {
        name: 'Our Company',
        address: '123 Main St, City, Country',
        phone: '+1 234 567 890',
        email: 'info@company.com',
    };

    // Dữ liệu phản hồi từ khách hàng
    const customerFeedback = [
        {
            name: 'John Smith',
            comment: 'I am extremely satisfied with the services provided by Our Company. Highly recommended!',
        },
        {
            name: 'Emily Johnson',
            comment: 'The team at Our Company has been a pleasure to work with. They are professional and efficient.',
        },
        // Thêm phản hồi khác...
    ];
    return (
        <div className="about-us-container">
            <div className="slider-banner">
                <Slider {...settings}>
                    <div>
                        <img src={img} />
                    </div>
                    <div>
                        <img src={img} />
                    </div>
                    <div>
                        <img src={img} />
                    </div>
                    <div>
                        <img src={img} />
                    </div>
                </Slider>
                {/* <AliceCarousel renderPrevButton mouseTracking={true} disableDotsControls disableButtonsControls responsive autoWidth={true} animationDuration={1000} items={items} autoPlayInterval={1000} autoPlay={true} infinite={true} /> */}
            </div>
            <Container maxWidth="lg">
                <div className="about-us-content">
                    <h2 className="section-title">Về sản phẩm</h2>
                    <p className="section-description">
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada purus id mauris tristique, sed
                        condimentum sem eleifend. Donec nec ante et lectus consectetur feugiat nec vitae ligula. Quisque id turpis
                        augue. Duis nec fringilla lectus, id commodo mauris. Nunc nec tortor id mi pellentesque lacinia. Etiam posuere
                        est vel faucibus viverra. Sed semper malesuada turpis sed ullamcorper. Phasellus facilisis neque in nunc
                        scelerisque pulvinar. Suspendisse sit amet aliquam neque, in varius mi. */}
                        Đây là một ứng dụng sổ tay du lịch áp dụng công nghệ Blockchain.
                        Trên đây người dùng có thể tìm kiếm các địa điểm du lịch một cách xác thực và an toàn thông qua việc checkin thực tế bằng quét mã QR.
                        Ngoài ra người dùng cũng có thể lưu giữ kỷ niệm sau mỗi chuyến hành trình và có thể xem lại bất cứ lúc nào.
                        Sản phẩm đang trong quá trình hoàn thiện, mong nhận được nhiều góp ý hơn.
                    </p>
                </div>

                <div className="team-section">
                    <h2 className="section-title">Thành viên thực hiện</h2>
                    <div className="employees-container">
                        <Avatar
                            alt="Remy Sharp"
                            src={chinh}
                            sx={{ width: 400, height: 400 }}
                        />
                        <Avatar
                            alt="Remy Sharp"
                            src={duy}
                            sx={{ width: 400, height: 400 }}
                        />
                        {/* Hiển thị danh sách nhân viên */}
                        {/* <ImageList sx={{ width: 600, height: 200 }} cols={3} rowHeight={164}>
                            {listimg && listimg.map((item, index) => (
                                <ImageListItem key={item}>
                                    <img
                                        src={`${item}?w=161&fit=crop&auto=format`}
                                        srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                        alt={`Đây là ảnh thứ ${index}`}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList> */}
                    </div>
                </div>

                <div className="company-info-section">
                    <h2 className="section-title">Thông tin liên hệ</h2>
                    <ul className="company-info-list">
                        <li>
                            <strong>Name:</strong> {companyInfo.name}
                        </li>
                        <li>
                            <strong>Address:</strong> {companyInfo.address}
                        </li>
                        <li>
                            <strong>Phone:</strong> {companyInfo.phone}
                        </li>
                        <li>
                            <strong>Email:</strong> {companyInfo.email}
                        </li>
                    </ul>
                </div>

                <div className="customer-feedback-section">
                    <h2 className="section-title">Feedback của người dùng</h2>
                    <div className="feedback-container">
                        {/* Hiển thị các phản hồi từ khách hàng */}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Intro;