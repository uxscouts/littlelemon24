import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "./BookingForm3";
import { fetchAPI } from "../API";
import { submitAPI } from "../API2";
import { useNavigate } from "react-router-dom";


export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES": {
      const selectedDate = new Date(action.payload);
      if (isNaN(selectedDate.getTime())) {
        return state;
      }
      return fetchAPI(selectedDate);
    }
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// main function for BookingPage 
function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes, [], initializeTimes);

// I'm not even sure if this is used
  const [formData, setFormData] = useState({}); 

 
 // the useNavigate hook is so the user is automatically
 // sent to confirmation page after successfully completing form
 const navigate = useNavigate();


  // initial creation of the array for holding reservations
  // must add new reservations to array using SPREAD operator 

  /*
const [reservations, setReservations] = useState([
  { id: 1, 
    name: "Samual L Jackson", 
    email: "same@jackson.com",
    phone: "555-555-5555",
    guests: 7,
    date: "2026-05-01", 
    time: "18:00"}
]);
*/

const [reservations, setReservations] = useState([]);
// use this state so alert happens AFTER setting form state
const [shouldAlert, setShouldAlert] = useState(false);


// Add a new reservation
const addReservation = (newBooking) => {
  setReservations([
    ...reservations, // Copy all existing bookings into the new array
    newBooking       // Add the new object to the end
  ]);
};


{/*

  // this version sent alert BEFORE setting state

  const handleFormSubmit = async (formData) => {
        const response = await submitAPI(formData);
    if (response) {
      const finalBooking = { id: Date.now(), ...formData };
      addReservation(finalBooking);
      console.log(reservations);
     // alert("Reservation confirmed!");
      alert(`Reservation confirmed!:\n${JSON.stringify(reservations, null, 2)}`);
     // navigate('/confirmedbooking');
    }
  };

  */}


const handleFormSubmit = async (formData) => {
  const response = await submitAPI(formData);
  if (response) {
    const finalBooking = { id: Date.now(), ...formData };
    addReservation(finalBooking); 
    setShouldAlert(true); 
  }
};

// This version waits to set state BEFORE posting alert
// useEffect when state changes
useEffect(() => {
  if (shouldAlert && reservations.length > 0) {
    alert(`Reservation confirmed!:\n${JSON.stringify(reservations, null, 2)}`);
    navigate('/confirmedbooking', { state: { data: reservations } });
    setShouldAlert(false); 
  }
}, [reservations, shouldAlert]);



  return (
    <main role="main">     
      <section 
        aria-live="polite" 
        aria-atomic="true"
        aria-labelledby="booking-title">
          <BookingForm 
            availableTimes={availableTimes} 
            dispatch={dispatch}
            onChildSubmit={handleFormSubmit} 
          />   
          
          <div className="container">
            <pre>
              {JSON.stringify(reservations, null, 2)}
            </pre>
          </div>
      </section>
    </main>
  );
}

export default BookingPage;
