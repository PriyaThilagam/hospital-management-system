package com.project.HospitalManagement.Service;

import com.project.HospitalManagement.DTO.LoginDTO;
import com.project.HospitalManagement.DTO.MemberDTO;
import com.project.HospitalManagement.response.LoginResponse;

public interface MemberService {
    String addUser(MemberDTO memberDTO);

    LoginResponse loginMember(LoginDTO loginDTO);
}
