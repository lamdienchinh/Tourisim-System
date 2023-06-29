import img from "../../assets/imgs/slider_banner_1.png";
import { Rating } from "@mui/material";

const Review = () => {
    return (
        <div className="review">
            <div className="review__row1">
                <div className="review__column1">
                    <div className="review__owner">
                        <div>
                            <img src={img} alt="Ảnh avatar"></img>
                        </div>
                        <div className="review__name">
                            Tên người review
                        </div>
                    </div>
                    <div className="review__verify">
                        Dấu verify
                    </div>
                    <div className="review__time">
                        5:32 PM dd/mm/yyyy
                    </div>
                </div>
                <div className="review__column2">
                    <Rating name="size-large" defaultValue={5} precision={0.5} size="large" readOnly />
                </div>
            </div>
            <div className="review__row2">
                <div className="review__title">
                    Title
                </div>
                <div className="review__content">
                    Content
                </div>
                <div className="review__listimgs">
                    List Imgs
                </div>
            </div>
        </div>
    );
}
export default Review;