// import { ReactElement, useState } from "react";
// import { FaTrash } from "react-icons/fa";
// import { Column } from "react-table";
import AdminSidebar from "../../components/admin/AdminSidebar";
// import TableHOC from "../../components/admin/TableHOC";

// interface DataType {
//   avatar: ReactElement;
//   name: string;
//   email: string;
//   gender: string;
//   role: string;
//   action: ReactElement;
// }

// const columns: Column<DataType>[] = [
//   // {
//   //   Header: "Avatar",
//   //   accessor: "avatar",
//   // },
//   // {
//   //   Header: "Name",
//   //   accessor: "name",
//   // },
//   // {
//   //   Header: "Gender",
//   //   accessor: "gender",
//   // },
//   // {
//   //   Header: "Email",
//   //   accessor: "email",
//   // },
//   // {
//   //   Header: "Role",
//   //   accessor: "role",
//   // },
//   // {
//   //   Header: "Action",
//   //   accessor: "action",
//   // },
// ];

// const img = "";
// const img2 = "";

// const arr: Array<DataType> = [
//   {
//     avatar: (
//       <img
//         style={{
//           borderRadius: "50%",
//         }}
//         src={img}
//         alt="Img1"
//       />
//     ),
//     name: "Emily Palmer",
//     email: "emily.palmer@example.com",
//     gender: "female",
//     role: "user",
//     action: (
//       <button>
//         <FaTrash />
//       </button>
//     ),
//   },

//   {
//     avatar: (
//       <img
//         style={{
//           borderRadius: "50%",
//         }}
//         src={img2}
//         alt="Img2"
//       />
//     ),
//     name: "May Scoot",
//     email: "aunt.may@example.com",
//     gender: "female",
//     role: "user",
//     action: (
//       <button>
//         <FaTrash />
//       </button>
//     ),
//   },
// ];

const Customers = () => {
  // const [rows, setRows] = useState<DataType[]>(arr);

  // const Table = TableHOC<DataType>(
  //   columns,
  //   rows,
  //   "dashboard-product-box",
  //   "Vacations",
  //   rows.length > 6
  // )();

  return (
    <div className="admin-container">
      <AdminSidebar />
      {/* <main>{Table}</main> */}
    </div>
  );
};

export default Customers;
