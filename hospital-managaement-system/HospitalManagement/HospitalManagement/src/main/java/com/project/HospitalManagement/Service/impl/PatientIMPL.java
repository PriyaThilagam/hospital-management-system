package com.project.HospitalManagement.Service.impl;

import com.project.HospitalManagement.Entity.Patient;
import com.project.HospitalManagement.Repository.PatientRepository;
import com.project.HospitalManagement.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientIMPL implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public List<Patient> displayPatientDetails() {
        return patientRepository.findAll();
    }

    @Override
    public void registerNewPatient(Patient patient) {
        patientRepository.save(patient);
    }

    @Override
    public void removePatient(Long patientId) {
        boolean patientExists = patientRepository.existsById(patientId);
        if(patientExists)
        {
            patientRepository.deleteById(patientId);
        }
        else{
            throw new IllegalStateException("Patient with Id" + patientId + "does not exist");
        }

    }
}
