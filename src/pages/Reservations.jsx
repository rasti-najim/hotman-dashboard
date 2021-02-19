import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import faker from "faker";

// custom
import BarChart from "../components/BarChart";
import Table, { Genres } from "../components/Table";

export default function Reservations() {
  // const [data, setData] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        // accessor: "show.language",
        accessor: "id",
      },
      {
        Header: "Guest",
        // accessor: "show.genres",
        accessor: "guest",
        // Cell: ({ cell: { value } }) => <Genres values={value} />,
      },
      {
        Header: "Room",
        // accessor: "show.runtime",
        accessor: "room",
        // Cell: ({ cell: { value } }) => {
        //   const hour = Math.floor(value / 60);
        //   const min = Math.floor(value % 60);
        //   return (
        //     <>
        //       {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
        //       {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
        //     </>
        //   );
        // },
      },
      {
        Header: "Date",
        // accessor: "show.status",
        accessor: "date",
      },
    ],
    []
  );

  // useEffect(() => {
  //   fetch("https://api.tvmaze.com/search/shows?q=snow")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => setData(data));
  // }, []);

  const data = new Array(100).fill(true).map(() => ({
    id: faker.random.number(),
    guest: faker.name.findName(),
    room: faker.random.number(),
    // date: faker.date.past(),
    date: faker.random.number(),
  }));

  return (
    <Container>
      <h1>Reservations</h1>
      <BarChart />
      <Table columns={columns} data={data} />
      {/* <Table /> */}
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  padding-left: 30px;
  padding-right: 30px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
