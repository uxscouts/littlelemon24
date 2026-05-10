import { useLocation } from "react-router-dom";
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  const location = useLocation();
  const data = location.state;
  
  // this assigns the passed data to a const
  // but also provides a fallback to an empty array
  // is the user comes to this page with no state
  const items = location.state?.data || [];
  
  console.log("Data received in ConfirmedBooking:", data);

  // turns out the last four digits of this number are
  // unique so this function slices those numnbers
const resNumber = (number) => {
  const str = String(number);
  return str.slice(-4);
};

  return (
    <Container>
      <div>
      <h1 className="pb-4 pt-4">Booking Confirmation</h1>
      {items.length > 0 ? (
      <Row>
        <Col>
          {items.map((item) => (
           <Table striped bordered hover responsive key={item.id}>
            <tbody>
             <tr>
                <th colspan='2' className="row-title">
                  <h3>Reservation <span className="smaller">#{resNumber(item.id)}</span></h3>
                </th>
             </tr>              
             <tr>
                <th className="row-title">Name</th>
                <td>{item.name}</td>
             </tr>
              <tr>
                <th className="row-title">Email</th>
                <td>{item.email}</td>
             </tr>
              <tr>
                <th className="row-title">Phone</th>
                <td>{item.phone}</td>
             </tr>
              <tr>
                <th className="row-title">Guests</th>
                <td>{item.guests}</td>
             </tr>
              <tr>
                <th className="row-title">Date</th>
                <td>{item.date}</td>
              </tr>
              <tr>
                <th className="row-title">Time</th>
                <td>{item.time}</td>
              </tr>
              </tbody>                                                                  
           </Table>
          ))}
          </Col>
        </Row>
      ) : (
        <p>No data found.</p>
      )}
    </div>
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