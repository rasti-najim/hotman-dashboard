import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import faker from "faker";

// custom
import Modal from "../components/Modal";

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
    selector: "id",
    sortable: true,
    style: {
      backgroundColor: "#ff0033",
    },
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

const data = new Array(100).fill(true).map(() => ({
  id: faker.random.number(),
  guest: faker.name.findName(),
  room: faker.random.number(),
  // date: faker.date.past(),
  date: faker.random.number(),
}));

export default function Table() {
  const [showModal, setShowModal] = useState(false);
  const [row, setRow] = useState([]);

  return (
    <>
      <DataTable
        // title="Reservations"

        columns={columns}
        data={data}
        highlightOnHover
        pointerOnHover
        onRowClicked={(row) => {
          setRow(row);
          setShowModal(true);
        }}
        selectableRows
      />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <h1>{row.id}</h1>
        <h1>{row.guest}</h1>
        <h1>{row.room}</h1>
        <h1>{row.date}</h1>
      </Modal>
    </>
  );
}
