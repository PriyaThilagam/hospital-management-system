package com.project.HospitalManagement.Repository;

import com.project.HospitalManagement.Entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findOneByUserEmailAndUserPassword(String userEmail, String userPassword);

    Member findByUserEmail(String userEmail);
}
