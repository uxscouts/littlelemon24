import { useLocation } from "react-router-dom";
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  const location = useLocation();
  const data = location.state;
  
  
  console.log("Data received in ConfirmedBooking:", data);

  const response = { 
    data: [ 
      { id: 1778371992096, name: "sddsf", email: "asdf@asdf.com", phone: "123-456-7890", guests: 2, date: "2026-05-19", time: "22:30" } 
    ] 
  };

  return (
    <Container>


    <div>
      {response.data.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p>
          <p>Guests: {item.guests}</p>
          <p>Appointment: {item.date} at {item.time}</p>
        </div>
      ))}
    </div>


      <Row>
        <Col>
        <pre>
        {JSON.stringify(data, null, 2)}
        </pre>
        </Col>
      </Row>
      <Row>
        <Col><h1>Booking Confirmed!</h1></Col>
      </Row>
      <Row>
        <Col><p>Thank you for your reservation, <strong>{data.name}</strong>!</p></Col>
      </Row>
      <Row>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th className="row-title">Name</th>
          <td>{data?.name}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="row-title">Email</th>
          <td>{data?.email}</td>
        </tr>
        <tr>
          <th className="row-title">Phone</th>
          <td>{data?.phone}</td>
        </tr>
        <tr>
          <th className="row-title">Guests</th>
          <td>{data?.guests}</td>
        </tr>
         <tr>
          <th className="row-title">Date</th>
          <td>{data?.date}</td>
        </tr>
         <tr>
          <th className="row-title">Time</th>
          <td>{data?.time}</td>
        </tr>                          
      </tbody>
    </Table>
      </Row>
      <Row>
        <Col>
          <p>    
            <Link to="/">
                 <Button variant="primary">Back to Home</Button>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default ConfirmedBooking;