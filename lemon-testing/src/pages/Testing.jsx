
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import SignupForm from '../components/TestForm3';
import TestForm4 from '../components/TestForm4';
import BookingForm2 from '../components/BookingForm2';

function Testing(){
    return (
        <Container>
            <BookingForm2 onChildSubmit={(data) => console.log("Data from child:", data)} />
        </Container>
    );

}
export default Testing;