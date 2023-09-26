import React, { useState, useEffect } from "react";
import right_arrow from "../../assets/right_arrow.png";
import { useTable } from "react-table";
import search from "../../assets/search.png";
import Filter from "../../assets/Filter.png";
import plus from "../../assets/plus.png";
import Input from "./input";
// import Input from "./input";

const Elements = () => {
  // Define your table data and columns
  const data = [
    {
      name: "John",
      elementCategory: "Deduction",
      elementClassification: "Pre-Tax Deduction",
      status: "Active",
      createdAt: "2023-09-20T18:32:47.716Z",
      modifiedBy: "Timothy",
      action: "click",
    },
    {
      name: "John",
      elementCategory: "Deduction",
      elementClassification: "Pre-Tax Deduction",
      status: "Active",
      createdAt: "2023-09-20T18:32:47.716Z",
      modifiedBy: "Timothy",
      action: "click",
    },
    {
      name: "John",
      elementCategory: "Deduction",
      elementClassification: "Pre-Tax Deduction",
      status: "Active",
      createdAt: "2023-09-20T18:32:47.716Z",
      modifiedBy: "Timothy",
      action: "click",
    },
    // {
    //   createdAt: "2023-09-20T18:32:47.716Z",
    //   name: "Element Category",
    //   description: "Element Category",
    //   type: "System Default",
    //   id: "1"
    //   },
    // Add more data rows as needed
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // corresponds to the data field
      },
      {
        Header: "Element Category",
        accessor: "elementCategory",
      },
      {
        Header: "Element Classification",
        accessor: "elementClassification",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Date & Time Modified",
        accessor: "createdAt",
      },
      {
        Header: "Modified By",
        accessor: "modifiedBy",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );

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
            <Input
              containerStyle="containStyle2"
              inputStyle="inputStyle2"
              buttonStyle="buttonStyle2"
              placeholder="Search for Element"
              imgStyle="img_input2"
            />
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
