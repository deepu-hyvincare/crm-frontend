import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { TicketTable } from "../../component/ticket-table/TicketTable";
import tickets from "../../assests/data/dummy-ticket.json";
import { Pagebreadcrumb } from "../../component/breadcrumb/breadcrumb";
import { Link } from "react-router-dom";
export const DashBoard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Pagebreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/addticket">
            <Button
              varient="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              add new ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>total tickets : 40</div>
          <div>pending tickets : 40</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recenty added Tickets</Col>
      </Row>
      <hr/>
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
