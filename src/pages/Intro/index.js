import "./css/Intro.scss";
import plane from "../../assets/imgs/plane.png"
import img from "../../assets/imgs/logo1.png"
import { Card, Avatar, CardContent } from '@mui/material';

const Intro = () => {
    return (
        <div className="intro-wrapper">
            <section className="intro-first">
                <div className="bg-img">
                    <div className="intro-logo">
                        <img src={img}></img>
                    </div>
                    <div className="intro-plane"><img src={plane}></img></div>
                    <div className="intro-content">
                        <h1>TOURDC</h1>
                        <h6>Ứng dụng du lịch áp dụng công nghệ Blockchain</h6>
                        <button className="intro-tohome" onClick={() => window.location.replace('/home')}>Khám phá ngay</button>
                    </div>
                </div>
            </section>
            <section className="intro-two">
                <div className="intro-two__title">
                    <h1>Các vấn đề đặt ra trong ngành du lịch Việt Nam hiện nay</h1>
                </div>
                <div className="intro-two__contentlist">
                    <div className="intro-problem">
                        <div className="problem-number">
                            1
                        </div>
                        Việc khai thác chưa hiệu quả tiềm năng phát triển của các địa điểm du lịch
                    </div>
                    <div className="intro-problem">
                        <div className="problem-number">
                            2
                        </div>
                        Vấn nạn reviews sai sự thật, marketing gây ảnh hưởng vô cùng lớn đến trải nghiệm của khách du lịch
                    </div>
                    <div className="intro-problem">
                        <div className="problem-number">
                            3
                        </div>
                        Vấn đề ứng dụng công nghệ thông tin trong du lịch chưa được phổ biến
                    </div>
                </div>
            </section>
            <section className="intro-three">
                <div className="intro-three__title">
                    <h1>Những điểm đến phổ biến</h1>
                    <h4>Đây là những địa điểm được nhiều người đánh giá nhất trong tháng này</h4>
                </div>
                <div className="intro-three-places">
                    <div className="popular-place pp1">
                       
                    </div>
                    <div className="popular-place pp2">
                        
                    </div >
                    <div className="popular-place pp3">
                       
                    </div>
                    <div className="popular-place pp4">
                        
                    </div >
                </div>
            </section >
        </div >
    );
}

export default Intro;