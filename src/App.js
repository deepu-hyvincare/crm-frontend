import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Entry_page } from "./pages/entry/Entry.page";
import { AddTicket } from "../src/pages/new-ticket/AddTicket";
import { DashBoard } from "./pages/dashboard/dashboard_page";
import { TicketList } from "./pages/TicketList/TicketList.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import { PrivateRoute} from '../src/component/privateRoute/PrivateRoute'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
         <Route exact path = "/"><Entry_page/></Route>
          <PrivateRoute path = "/dashboard"><DashBoard /></PrivateRoute>
          <PrivateRoute path = "/tickets"><TicketList /></PrivateRoute>
          <PrivateRoute path = "/addticket"><AddTicket /></PrivateRoute>
          <PrivateRoute path = "/ticket/:tId"><Ticket/></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
