import axios from 'axios'
import React from 'react'

const Patients = ({patient}) => {

    const deleteHandler = (event) =>{
        event.preventDefault()

        axios
            .delete(`http://localhost:8080/api/v1/patients/${patient.patientID}`)
            .then (response => {
                if (response.status == 200)
                {
                    alert(`Appointment of ${patient.patientName} is cancelled`)
                    window.location.href='/bookings'
                }
            })
            .catch(error => {
                alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
            })
    }

  return (
    <tr>
        <td>{patient.patientID}</td>
        <td>{patient.patientName}</td>
        <td>{patient.patientEmail}</td>
        <td>{patient.patientDOB}</td>
        <td>{patient.reasonForVisit}</td>
        <td>{patient.dateOfVisit}</td>
        <td>
            <button class= "bttn" onClick={deleteHandler}>Cancel</button>
        </td>
    </tr>
  )
}

export default Patients