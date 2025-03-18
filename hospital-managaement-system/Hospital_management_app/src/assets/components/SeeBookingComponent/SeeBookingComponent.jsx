import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Patients from './Patients'
import './SeeBookingComponent.css'
import { Link } from 'react-router-dom'

const SeeBookingComponent = () => {

    const [patients, setPatients] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/v1/patients/seeBookings`)
            .then(response => setPatients(response.data))
            .catch(error => {
                alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
            })
    }, [])

    const redirectHandler = (event) => {
        event.preventDefault()

        window.location.href="/book"
    }

  return (
    <div class='patients'>
        <h1 class="heading"><span>Book</span>ings</h1>
        {patients.length === 0 ? (
            <div class="no-booking">
                <p>No bookings found</p>
                <form onSubmit={redirectHandler}>
                    <input class="btn" type="submit" value="Add Appointments"/>
                </form>
            </div>
        ) : (
            <table class="content-table">
            <thead>
                <tr>
                    <th>Booking ID</th>
                    <th>Patient Name</th>
                    <th>Patient Email</th>
                    <th>Date Of Birth</th>
                    <th>Reason Of Visit</th>
                    <th>Date Of Visit</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {patients.map((patient, index) => (
                    <Patients key={index} patient={patient}/>
                ))}
            </tbody>
        </table>

        )}
    </div>
  )
}

export default SeeBookingComponent