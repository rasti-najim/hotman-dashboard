import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

// const data = [
//   {
//     id: 1,
//     title: "#1245",
//     guest: "Rasti Najim",
//     room: "42",
//     date: "12 Dec, 2021",
//   },
// ];
const columns = [
  {
    name: "ID",
    selector: "title",
    sortable: true,
  },
  {
    name: "Guest",
    selector: "guest",
    sortable: true,
    // right: true,
  },
  {
    name: "Room",
    selector: "room",
    sortable: true,
    // right: true,
  },
  {
    name: "Date",
    selector: "date",
    sortable: true,
    // right: true,
  },
];

export default function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://jsonblob.com/api/jsonBlob/9cd5551c-63e1-11eb-b9a6-777351e8b9c2"
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <DataTable
      //   title="Arnold Movies"
      columns={columns}
      data={data.items}
    />
  );
}
