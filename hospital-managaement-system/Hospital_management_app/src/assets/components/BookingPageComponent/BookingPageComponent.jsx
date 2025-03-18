import React, { useState } from 'react'
import "./BookingPageComponent.css"
import pic from "./images/booking.png"
import axios from 'axios'

const BookingPageComponent = () => {

    const [patientInfo, setPatientInfo] = useState({
        patientName : '',
        patientEmail : '',
        patientDOB : '',
        reasonForVisit : '',
        dateOfVisit : ''
    })

    const patientNameHandler = (event) => {
        setPatientInfo({
            ...patientInfo,
            patientName : event.target.value
        })
    }

    const patientEmailHandler = (event) => {
        setPatientInfo({
            ...patientInfo,
            patientEmail : event.target.value
        })
    }

    const patientDOBHandler = (event) => {
        setPatientInfo({
            ...patientInfo,
            patientDOB : event.target.value
        })
    }

    const dateOfVisitHandler = (event) => {
        setPatientInfo({
            ...patientInfo,
            dateOfVisit : event.target.value
        })
    }

    const reasonOfVisitHandler = (event) => {
        setPatientInfo({
            ...patientInfo,
            reasonForVisit : event.target.value
        })
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()

        axios
            .post(`http://localhost:8080/api/v1/patients/book`, patientInfo)
            .then((response) => {
                if(response.status == 200)
                {
                    alert(`Appointment of ${patientInfo.patientName} is successful.`)
                    window.location.href='/bookings'
                }
            })
            .catch(error => {
                alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
            })
    }

    const {patientName, patientEmail, patientDOB, reasonForVisit, dateOfVisit} = patientInfo

  return (
    <section class="book" id="book">
    <h1 class="heading"><span>book</span> now </h1>
    <div class="row">
        <div class="image">
            <img src={pic} alt=""/>
        </div>

        <form onSubmit={formSubmitHandler}>
            <h3>Book appointment</h3>
            <input type="text" value={patientName} onChange={patientNameHandler} placeholder="your name" class="box"/>
            <input type="email" value={patientEmail} onChange={patientEmailHandler} placeholder="your email" class="box"/>
            <div className='date'>
                <label htmlFor="patientDob">Date Of Birth</label>
                <input type="date" value={patientDOB} onChange={patientDOBHandler} class="box"/>
            </div>
            <input type="text" value={reasonForVisit} onChange={reasonOfVisitHandler} placeholder="reason for your visit" class="box"/>
            <div className='date'>
                <label htmlFor="appointmentDate">Date Of Visit</label>
                <input type="date" value={dateOfVisit} onChange={dateOfVisitHandler} class="box"/>
            </div>
            <input type="submit"  value="Book Now" class="btn"/>
        </form>
    </div>
</section>
  )
}

export default BookingPageComponent