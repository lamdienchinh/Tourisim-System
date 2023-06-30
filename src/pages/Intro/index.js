import React from 'react';
import './Intro.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img from "../../assets/imgs/angiang.webp"

const Intro = () => {
    // Dữ liệu của slider banner
    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src={img} onDragStart={handleDragStart} role="presentation" />,
        <img src={img} onDragStart={handleDragStart} role="presentation" />,
        <img src={img} onDragStart={handleDragStart} role="presentation" />,
    ];

    // Dữ liệu của danh sách nhân viên
    const employees = [
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'employee1.jpg',
        },
        {
            name: 'Jane Smith',
            position: 'CTO',
            image: 'employee2.jpg',
        },
        // Thêm các nhân viên khác...
    ];

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
                <AliceCarousel mouseTracking autoWidth={true} animationDuration={1000} items={items} autoPlayInterval={1000} autoPlay={true} infinite={true} />
            </div>

            <div className="about-us-content">
                <h2 className="section-title">About Our Company</h2>
                <p className="section-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada purus id mauris tristique, sed
                    condimentum sem eleifend. Donec nec ante et lectus consectetur feugiat nec vitae ligula. Quisque id turpis
                    augue. Duis nec fringilla lectus, id commodo mauris. Nunc nec tortor id mi pellentesque lacinia. Etiam posuere
                    est vel faucibus viverra. Sed semper malesuada turpis sed ullamcorper. Phasellus facilisis neque in nunc
                    scelerisque pulvinar. Suspendisse sit amet aliquam neque, in varius mi.
                </p>
            </div>

            <div className="team-section">
                <h2 className="section-title">Our Team</h2>
                <div className="employees-container">
                    {/* Hiển thị danh sách nhân viên */}
                </div>
            </div>

            <div className="company-info-section">
                <h2 className="section-title">Company Information</h2>
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
                <h2 className="section-title">Customer Feedback</h2>
                <div className="feedback-container">
                    {/* Hiển thị các phản hồi từ khách hàng */}
                </div>
            </div>
        </div>
    );
};

export default Intro;