package com.project.HospitalManagement.DTO;

import java.time.LocalDate;

public class PatientDTO {

    private Long patientID;
    private String patientName;
    private String patientEmail;
    private LocalDate patientDOB;
    private String reasonForVisit;
    private LocalDate dateOfVisit;

    public PatientDTO(Long patientID, String patientName, String patientEmail, LocalDate patientDOB, String reasonForVisit, LocalDate dateOfVisit) {
        this.patientID = patientID;
        this.patientName = patientName;
        this.patientEmail = patientEmail;
        this.patientDOB = patientDOB;
        this.reasonForVisit = reasonForVisit;
        this.dateOfVisit = dateOfVisit;
    }

    public PatientDTO() {
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
        return "PatientDTO{" +
                "patientID=" + patientID +
                ", patientName='" + patientName + '\'' +
                ", patientEmail='" + patientEmail + '\'' +
                ", patientDOB=" + patientDOB +
                ", reasonForVisit='" + reasonForVisit + '\'' +
                ", dateOfVisit=" + dateOfVisit +
                '}';
    }
}
