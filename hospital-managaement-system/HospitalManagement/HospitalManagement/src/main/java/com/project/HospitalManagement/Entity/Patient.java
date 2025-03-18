package com.project.HospitalManagement.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "patient")

public class Patient {

    @Id
    @Column(name = "patient_id", length = 45)
    @SequenceGenerator(
            name="patient_sequence",
            sequenceName = "patient_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "patient_sequence"
    )
    private Long patientID;

    @Column(name = "patient_name")
    private String patientName;

    @Column(name = "patient_email")
    private String patientEmail;

    @Column(name = "patient_dob")
    private LocalDate patientDOB;

    @Column(name = "reason_for_visit")
    private String reasonForVisit;

    @Column(name = "date_of_visit")
    private LocalDate dateOfVisit;

    public Patient(Long patientID, String patientName, String patientEmail, LocalDate patientDOB, String reasonForVisit, LocalDate dateOfVisit) {
        this.patientID = patientID;
        this.patientName = patientName;
        this.patientEmail = patientEmail;
        this.patientDOB = patientDOB;
        this.reasonForVisit = reasonForVisit;
        this.dateOfVisit = dateOfVisit;
    }

    public Patient() {
    }

    public Long getPatientID() {
        return patientID;
    }

    public void setPatientID(Long patientID) {
        this.patientID = patientID;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getPatientEmail() {
        return patientEmail;
    }

    public void setPatientEmail(String patientEmail) {
        this.patientEmail = patientEmail;
    }

    public LocalDate getPatientDOB() {
        return patientDOB;
    }

    public void setPatientDOB(LocalDate patientDOB) {
        this.patientDOB = patientDOB;
    }

    public String getReasonForVisit() {
        return reasonForVisit;
    }

    public void setReasonForVisit(String reasonForVisit) {
        this.reasonForVisit = reasonForVisit;
    }

    public LocalDate getDateOfVisit() {
        return dateOfVisit;
    }

    public void setDateOfVisit(LocalDate dateOfVisit) {
        this.dateOfVisit = dateOfVisit;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "patientID=" + patientID +
                ", patientName='" + patientName + '\'' +
                ", patientEmail='" + patientEmail + '\'' +
                ", patientDOB=" + patientDOB +
                ", reasonForVisit='" + reasonForVisit + '\'' +
                ", dateOfVisit=" + dateOfVisit +
                '}';
    }
}
