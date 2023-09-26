import React from "react";
import right_arrow from "../../assets/right_arrow.png";
import { useTable } from "react-table";
import search from "../../assets/search.png";
import Filter from "../../assets/Filter.png";
import plus from "../../assets/plus.png";
// import Input from "./input";

const Elements = () => {
  // Define your table data and columns
  const data = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 30,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 25,
    },
    // Add more data rows as needed
  ];

  const columns = [
    {
      Header: "First Name",
      accessor: "firstName", // corresponds to the data field
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    // Add more columns as needed
  ];

  // Use the useTable hook to create the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="elements">
      <div className="page_title">
        <p className="text_1">Payroll Management</p>
        <img src={right_arrow} alt="arrow" img_group />
        <p className="text_1">Element Setup</p>
        <img src={right_arrow} alt="arrow" img_group />
        <p className="text_2">Elements</p>
      </div>
      <div className="element_con">
        <p className="element_heading">Elements</p>
        <div className="input_section">
          <div className="input_btn">
            <div className="input1">
              <input className="searching1" placeholder="Search for element" />
              <button className="btn1">
                <img src={search} alt="search" className="img_input1" />
              </button>
            </div>
            <button className="blue_icon">
              <img src={Filter} alt="filter" className="img_filter" />
            </button>
          </div>
          <button className="green_btn">
            <p className="CE">Create Element</p>
            <img src={plus} alt="plus" className="img_input1" />
          </button>
        </div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Elements;
