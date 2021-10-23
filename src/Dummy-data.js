// import { ReportGmailerrorred } from "@mui/icons-material";
// import axios from "axios";

export const userData = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 6000,
  },
  {
    name: "Mar",
    "Active User": 1000,
  },
  {
    name: "Apr",
    "Active User": 3000,
  },
  {
    name: "Jun",
    "Active User": 4000,
  },
  {
    name: "Jul",
    "Active User": 7500,
  },
  {
    name: "Aug",
    "Active User": 4500,
  },
  {
    name: "Sep",
    "Active User": 3500,
  },
  {
    name: "Oct",
    "Active User": 5500,
  },
  {
    name: "Nov",
    "Active User": 3000,
  },
  {
    name: "Dec",
    "Active User": 2300,
  },
];

export const productData = [
  {
    name: "Sep",
    Sales: 4000,
  },
  {
    name: "Oct",
    Sales: 3000,
  },
  {
    name: "Nov",
    Sales: 5000,
  },
];

export const rowsData = [
  {
    id: 1,
    username: "Song Pitou",
    avatar:
      "https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png",
    email: "Song@gmail.com",
    status: "active",
    transaction: "$170.22",
  },
  {
    id: 2,
    username: "Song Pitou",
    avatar:
      "https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png",
    email: "Song@gmail.com",
    status: "active",
    transaction: "$170.22",
  },
  {
    id: 5,
    username: "Song Pitou",
    avatar:
      "https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png",
    email: "Song@gmail.com",
    status: "active",
    transaction: "$170.22",
  },
  {
    id: 3,
    username: "Song Pitou",
    avatar:
      "https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png",
    email: "Song@gmail.com",
    status: "active",
    transaction: "$170.22",
  },
];

// const fetchData = () => {
//   axios
//     .get("https://randomuser.me/api/")
//     .then((res) => {
//       return res;
//     })
//     .then((res) => {
//       console.log(res.data);
//       var rowObj = {};
//       rowObj.id = 5;
//       rowObj.username = res.data.results[0].name.last;
//       rowObj.avatar =
//         "https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png";
//       rowObj.email = res.data.results[0].email;
//       rowObj.status = "active";
//       rowObj.transaction = "$122.99";

//       // rowsData.push(rowObj);
//       return rowObj;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

export const rowsProduct = [
  {
    id: 1,
    name: "Airpod",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000",
    stock: 123,
    status: "active",
    price: "$110.22",
  },
  {
    id: 2,
    name: "Airpod",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000",
    stock: 123,
    status: "active",
    price: "$1700.22",
  },
  {
    id: 4,
    name: "Airpod",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000",
    stock: 123,
    status: "active",
    price: "$1320.52",
  },
  {
    id: 3,
    name: "Airpod",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000",
    stock: 123,
    status: "active",
    price: "$2250.02",
  },
];
