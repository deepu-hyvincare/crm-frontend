import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Pagebreadcrumb } from "../../component/breadcrumb/breadcrumb";
import { SearchForm } from "../../component/SearchForm/SearchForm";
import { TicketTable } from "../../component/ticket-table/TicketTable";
import tickets from "../../assests/data/dummy-ticket.json";
import { Link } from "react-router-dom";
export const TicketList = () => {
  const [str, setStr] = useState("");
  const [DispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {}, [str, DispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTicket = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

    setDispTicket(displayTicket);
  };

  return ( 
    <Container>
      <Row>
        <Col>
          <Pagebreadcrumb page="Ticket List" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/addticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <TicketTable tickets={DispTicket} />
        </Col>
      </Row>
    </Container>
  );
};
