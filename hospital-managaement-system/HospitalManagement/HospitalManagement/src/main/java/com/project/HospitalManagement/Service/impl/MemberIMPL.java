package com.project.HospitalManagement.Service.impl;

import com.project.HospitalManagement.DTO.LoginDTO;
import com.project.HospitalManagement.DTO.MemberDTO;
import com.project.HospitalManagement.Entity.Member;
import com.project.HospitalManagement.Repository.MemberRepository;
import com.project.HospitalManagement.Service.MemberService;
import com.project.HospitalManagement.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberIMPL implements MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(MemberDTO memberDTO) {

        Member member = new Member(

            memberDTO.getUserID(),
            memberDTO.getUserName(),
            memberDTO.getUserEmail(),
            this.passwordEncoder.encode(memberDTO.getUserPassword())

        );

        memberRepository.save(member);

        return member.getUserName();

    }

    @Override
    public LoginResponse loginMember(LoginDTO loginDTO) {

        String msg = "";
        Member member1 = memberRepository.findByUserEmail(loginDTO.getUserEmail());
        if (member1 != null){
            String userPassword = loginDTO.getUserPassword();
            String encodedPassword = member1.getUserPassword();
            Boolean isPwdRight = passwordEncoder.matches(userPassword, encodedPassword);
            if(isPwdRight){
                Optional<Member> member = memberRepository.findOneByUserEmailAndUserPassword(loginDTO.getUserEmail(),encodedPassword);
                if (member.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
            }
        }


    }

