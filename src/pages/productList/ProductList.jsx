import React from "react";
import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { rowsProduct } from "../../Dummy-data";
import { useState } from "react";

function ProductList() {
  const [data, setData] = useState(rowsProduct);
  const deleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "status",

      width: 150,
    },
    {
      field: "price",
      headerName: "Price",

      width: 260,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => deleteHandler(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

export default ProductList;
