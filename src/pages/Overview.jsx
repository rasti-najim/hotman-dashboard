import { useEffect, useState, useMemo } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { Frame, Page, Stack, useCycle } from "framer";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import faker from "faker";

// custom
import Card from "../components/Card";
import Modal from "../components/Modal";
import Add from "../components/Add";
import Table from "../components/Table";

export default function Overview({ toggleTheme }) {
  const [showModal, setShowModal] = useState(false);

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
      },
      {
        Header: "Date",
        // accessor: "show.status",
        accessor: "date",
      },
    ],
    []
  );

  const data = new Array(100).fill(true).map(() => ({
    id: faker.random.number(),
    guest: faker.name.findName(),
    room: faker.random.number(),
    // date: faker.date.past(),
    date: faker.random.number(),
  }));

  return (
    <Container>
      <h1>Overview</h1>
      <CardsContainer>
        <Card title="Arrivals" number={54} />
        <Card title="Departures" number={12} />
        <Card title="Rooms Occupied" number={50} />
      </CardsContainer>
      <ReservationsContainer>
        {/* <h6>Reservations</h6>
        <SearchBox placeholder="Search name, room, or id" />
        <Button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowModal(true)}
        >
          <StyledFaPlus />
          Add
        </Button> */}
        <Button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
        >
          Dark Mode
        </Button>
      </ReservationsContainer>
      <Table columns={columns} data={data} />
      <Stack direction="horizontal" size={100} gap={120}>
        <Frame background="#09F" size={25} radius="50%" />
        <Frame background="#05F" size={25} radius="50%" />
      </Stack>
      {/* <Frame center /> */}
      {/* <Page>
        <Frame>A</Frame>
        <Frame>B</Frame>
        <Frame>C</Frame>
      </Page> */}
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  padding-left: 30px;
  /* background: ${({ theme }) => theme.background}; */
  /* overflow-y: scroll; */
`;

const CardsContainer = styled(Row)`
  justify-content: space-around;
`;

const ReservationsContainer = styled(Row)`
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Button = styled(motion.button)`
  border: 2px solid;
  border-color: ${({ theme }) => (theme.mode == "light" ? "#fff" : "#000")};
  padding: 5px 20px;
  background-color: #536dfe;
  /* background-color: #5469d4; */
  /* background-color: #1899ff; */
  /* background-color: #000; */
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const SearchBox = styled.input`
  width: 30vw;
  border-width: 0px;
  border-radius: 5px;
  padding: 10px;
  border: solid #000;
  border-width: 2px;
  /* box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4); */
`;

const StyledFaPlus = styled(FaPlus)`
  padding-right: 5px;
`;
