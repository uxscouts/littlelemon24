import React, { useState } from "react";
import { useBooking } from "../context/BookingContext";
import { useFormik } from 'formik';
import { Form as BootstrapForm, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import { Container, Table, Form } from 'reactstrap';
import * as Yup from 'yup';


const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Format must be 123-456-7890")
    .required("Phone number is required"),
  guests: Yup.number()
    .min(2, "Minimum 2 guests")
    .max(8, "Maximum 8 guests")
    .required("Number of guests is required"),
  date: Yup.string()
    .required("Date is required"),
  time: Yup.string()
    .required("Time is required")
});

const BookingForm = ({ 
  availableTimes,
  dispatch,   
  onChildSubmit
}) =>  {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      guests: 2,
      date: '',
      time: '',
    },
    validationSchema: bookingSchema,
    onSubmit: (values) => {
      console.log('Form Data:', values);
      // Your handleSubmit2 logic goes here
      const stringifiedData = JSON.stringify(values);
      alert(stringifiedData);
    },
  });





  const { booking, updateBooking } = useBooking();
  const [name, setName] = useState(booking.name || "Joe Smith");
  const [email, setEmail] = useState(booking.email || "something@example.com");
  const [phone, setPhone] = useState(booking.phone || "123-456-7890");
  const [guests, setGuests] = useState(booking.guests || "4");
  const [date, setDate] = useState(booking.date || "2026-05-07");
  const [time, setTime] = useState(booking.time || "");

  // for the date field to set earliest and latest date for Reservation 
  /*
  const today = new Date().toISOString().split('T')[0];
  const maxDateObj = new Date();
  maxDateObj.setMonth(maxDateObj.getMonth() + 2);
  const maxDate = maxDateObj.toISOString().split('T')[0];
  */


  // use function uses Reducer to send data to parent
  // but it is different becuase it sends values via
  // onSubmit (so I can simulateously creaete local State 
  // with onChange)
  const handleSubmit2 = (event) => {
    event.preventDefault(); // Stop reload
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries()); // Convert to object
    updateBooking(value.name, value.email, value.phone, value.guests, value.date, value.time);
    onChildSubmit(value); // Send up to parent
  };



// this if for Reducer Update Times only
// and this happens locally but onChange 
// so values are dictated by date change
// dont need this because I switched to the onSubmit for 
// form REDUCER

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
  };

  return (
    <>
      <div className="BookingFormContainer">

       <BootstrapForm 
         className="BookingForm" 
         aria-labelledby="booking-title"
        // onSubmit={formik.handleSubmit}
         onSubmit={handleSubmit2}
         >

        <FormGroup>
            <Label htmlFor="name">Full Name:</Label>
            <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            invalid={formik.touched.name && !!formik.errors.name}
            />
            <FormFeedback>{formik.errors.name}</FormFeedback>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="email">Email address:</Label>
            <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            invalid={formik.touched.email && !!formik.errors.email}
            />
            <FormFeedback>{formik.errors.email}</FormFeedback>
        </FormGroup>
        


      <FormGroup>
        <Label htmlFor="phone">Phone (123-456-7890):</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          invalid={formik.touched.phone && !!formik.errors.phone}
        />
        <FormFeedback>{formik.errors.phone}</FormFeedback>
      </FormGroup>


      <FormGroup>
        <Label htmlFor="guests">Guests (2-8):</Label>
        <Input
          id="guests"
          name="guests"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.guests}
          invalid={formik.touched.guests && !!formik.errors.guests}
        />
        <FormFeedback>{formik.errors.guests}</FormFeedback>
      </FormGroup>


           <FormGroup>
            <Label htmlFor="date" id="label-date">Booking Date:</Label>
            <Input 
              id="date"
              name="date" 
              type="date" 
              placeholder="Guests" 
             // value={date}
                onChange={(e) => {
                    handleDateChange(e);
                    formik.handleChange(e);
                }} 
              onBlur={formik.handleBlur}
              value={formik.values.date}
              invalid={formik.touched.date && !!formik.errors.date}
              aria-required="true"
              aria-labelledby="label-date"                                   
            />             
           </FormGroup>

              <FormGroup>
                <Label htmlFor="time" id="label-time">
                  Time:
                </Label>
                <select
                  name="time"
                  id="time"
                  onChange={(e) => {
                      formik.handleChange(e);
                    }} 
                  onBlur={formik.handleBlur}
                  value={formik.values.time}
                  invalid={formik.touched.time && !!formik.errors.time} 
                  aria-required="true"
                  aria-labelledby="label-time"
                >
                  {availableTimes.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>
                      {timeOption}
                    </option>
                  ))}
                </select>
              </FormGroup>


{/*

            <FormGroup>
            <Label htmlFor="time">Time</Label>  
              <div className="box">
              {availableTimes.map((timeOption) => (
                  <div key={timeOption} className="timeOptions">
                      <input
                        type="radio"
                        id={timeOption}
                        name="time"
                        value={timeOption}
                        // onChange={handleTimeChange}
                        onChange={(e) => {
                          formik.handleChange(e);
                        }}       
                        aria-required="true"
                      />
                      {timeOption}
                  </div>
                ))}
                </div>
          </FormGroup>
*/}


        <Button 
            type="submit" 
            color="primary" 
            disabled={!(formik.isValid && formik.dirty)}
        >Submit
        </Button>
      
        </BootstrapForm>
        </div>
    </>
  );
}

export default BookingForm;

