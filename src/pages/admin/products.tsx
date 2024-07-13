import { ReactElement, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TableHOC from "../../components/admin/TableHOC";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  // {
  //   Header: "Photo",
  //   accessor: "photo",
  // },
  // {
  //   Header: "Name",
  //   accessor: "name",
  // },
  // {
  //   Header: "Price",
  //   accessor: "price",
  // },
  // {
  //   Header: "Stock",
  //   accessor: "stock",
  // },
  // {
  //   Header: "Action",
  //   accessor: "action",
  // },
];

const img = "";

const img2 = "";

const arr: Array<DataType> = [
  // {
  //   photo: <img src={img} alt="Hotel 1" />,
  //   name: "Hotel 1",
  //   price: 690,
  //   stock: 3,
  //   action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  // },
  // {
  //   photo: <img src={img2} alt="Hotel 2" />,
  //   name: "Hotel 2",
  //   price: 232223,
  //   stock: 213,
  //   action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  // },
];

const Products = () => {
  const [rows, setRows] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Hotels",
    rows.length > 6
  )();

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
