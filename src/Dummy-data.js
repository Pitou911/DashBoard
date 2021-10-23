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

export const rowsData = [
  {
    id: 1,
    username: "Jon Snow",
    avatar:
      "https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$110.22",
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
    id: 4,
    username: "Kirito",
    avatar:
      "https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png",
    email: "Kirito@gmail.com",
    status: "active",
    transaction: "$120.52",
  },
  {
    id: 3,
    username: "Kiritou",
    avatar:
      "https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png",
    email: "Kiritou@gmail.com",
    status: "active",
    transaction: "$250.02",
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
