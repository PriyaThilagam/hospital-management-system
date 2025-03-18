package com.project.HospitalManagement.Service;

import com.project.HospitalManagement.Entity.Patient;

import java.util.List;

public interface PatientService {


    List<Patient> displayPatientDetails();

    void registerNewPatient(Patient patient);

    void removePatient(Long patientId);
}
