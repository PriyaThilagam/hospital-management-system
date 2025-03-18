package com.project.HospitalManagement.Controller;

import com.project.HospitalManagement.Entity.Patient;
import com.project.HospitalManagement.Service.PatientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/api/v1/patients")
public class PatientController {


    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }
    @GetMapping("/seeBookings")
    public List<Patient> getPatientDetails()
    {
        return patientService.displayPatientDetails();
    }
    @PostMapping("/book")
    public void postPatientDetails(@RequestBody Patient patient)
    {
        patientService.registerNewPatient(patient);
    }
    @DeleteMapping(path = {"/{id}"})
    public void deletePatient(@PathVariable("id") Long patientId)
    {
        patientService.removePatient(patientId);
    }

}
