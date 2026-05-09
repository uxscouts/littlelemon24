
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import BookingForm from '../components/BookingForm3';

function Testing(){
    return (
        <Container>
            <BookingForm onChildSubmit={(data) => console.log("Data from child:", data)} />
        </Container>
    );

}
export default Testing;