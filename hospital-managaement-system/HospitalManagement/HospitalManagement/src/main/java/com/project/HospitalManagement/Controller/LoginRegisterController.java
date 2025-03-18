package com.project.HospitalManagement.Controller;

import com.project.HospitalManagement.DTO.LoginDTO;
import com.project.HospitalManagement.DTO.MemberDTO;
import com.project.HospitalManagement.Service.MemberService;
import com.project.HospitalManagement.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "api/v1/user")

public class LoginRegisterController {

    @Autowired
    private MemberService memberService;

    @PostMapping(path = "/save")
    public String saveUser(@RequestBody MemberDTO memberDTO)
    {
        String id = memberService.addUser(memberDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?>LoginMember(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = memberService.loginMember(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
