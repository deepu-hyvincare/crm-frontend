import React,{useState,useEffect} from 'react'
import tickets from '../../assests/data/dummy-ticket.json'
import { Container,Row,Col,Button} from 'react-bootstrap'
import { Pagebreadcrumb } from '../../component/breadcrumb/breadcrumb'
import { MessageHistory } from '../../component/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../component/update-ticket/UpdateTicket'
import { useParams } from "react-router-dom";

//const ticket = tickets[0]
export const Ticket = () => {
	const { tId } = useParams();
    const [message, setMessage] = useState('')
    const [ticket, setTicket] = useState('')

    useEffect(() => {
        for(let i = 0; i < tickets.length; i++) {
            if(tickets[i].id == tId){
                setTicket(tickets[i])
                continue
            }
        }
    }, [message,tId])
   
    const handleOnChange = e =>{
        setMessage(e.target.value)
    }
    const handleOnSubmit = () =>{
       alert('form submit')
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Pagebreadcrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                <h1>ticket id : {tId}</h1>
                    <div className="subject">subject :{ticket.subject}</div>
                    <div className="date">date:{ticket.addedAt}</div>
                    <div className="status">status:{ticket.status}</div>
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row  className="mt-4">
                <Col>{ticket.history &&  <MessageHistory msg ={ticket.history}/>}
                   
                </Col>
            </Row> 
            <Row  className="mt-4">
                <Col>
                    <UpdateTicket
                     msg = {message}
                      handleOnSubmit={handleOnSubmit}
                       handleOnChange={handleOnChange}/>
                </Col>
            </Row>
            
        </Container>
    )
}
