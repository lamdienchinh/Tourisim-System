import img from "../assets/imgs/slider_banner_1.png";
const types = [
    {
        id: 1,
        type: 'danh lam',
        title: 'Danh lam',
        img: img,
        rate: 5,
        address: 'ADDRESS1',
        comment: '120'
    },
    {
        id: 2,
        type: 'di tich',
        title: 'Di tích',
        img: img,
        rate: 5,
        address: 'ADDRESS2',
        comment: '120'
    },
    {
        id: 3,
        type: 'am thuc',
        title: 'Ẩm thực',
        img: img,
        rate: 5,
        address: 'ADDRESS3',
        comment: '120'
    },
    {
        id: 4,
        type: 'giai tri',
        title: 'Giải trí',
        img: img,
        rate: 5,
        address: 'ADDRESS4',
        comment: '120'
    },
    {
        id: 5,
        type: 'noi o',
        title: 'Nơi ở',
        img: img,
        rate: 5,
        address: 'ADDRESS5',
        comment: '120'
    }
];
const trips =
{
    place: "Rừng Tràm",
    id: 1,
    title: "Chuyến đi 1",
    time: "2023-07-01",
    description: "Mô tả chuyến đi 1, Đây là một chuyến đi vô cùng thú vị",
    rating: 4,
    images: [
        {
            "id": 1,
            "url": img
        },
        {
            "id": 2,
            "url": img
        }
    ]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { types, trips };