package com.mybang.khweb.controller;

import com.mybang.khweb.controller.session.UserInfo;
import com.mybang.khweb.request.MemberRequest;
import com.mybang.khweb.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;


@Slf4j
@Controller
@RequestMapping("/member")
@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")


public class MemberController {


        private UserInfo info;

        @Autowired
        private MemberService service;

        private HttpSession session;

        @PostMapping("/register")
        public Object Register(
                @Validated @RequestBody MemberRequest memberRequest) throws Exception {
            log.info("jpaRegister(): " + memberRequest.getUserId() + ", " + memberRequest.getPassword() + ", " +
                    (memberRequest.getAuth().equals("사업자") ? "ROLE_BUSINESS" : "ROLE_INDIVIDUAL"));

            boolean checkId = false;
            checkId = service.checkDuplicateId(memberRequest.getUserId());

            if(checkId == true) {
                log.info("success");
                log.info(memberRequest.getUserId());
                service.register(memberRequest);
                return new ResponseEntity<Boolean>(HttpStatus.OK);
            }else {
                log.info("duuplicate");
                log.info(memberRequest.getUserId());
                return false;
            }

        }



        @PostMapping("/login")
        public ResponseEntity<UserInfo> jpaLogin(
                @RequestBody MemberRequest memberRequest,
                HttpServletRequest request
        ) throws Exception {

            log.info("jpaLogin() - userId: " + memberRequest.getUserId() + ", password: " + memberRequest.getPassword());

            MemberRequest memberResponse = service.login(memberRequest);

            if (!memberResponse.equals(null)) {
                log.info("Login Success");
                // 세션 할당
                info = new UserInfo();
                info.setUserId(memberResponse.getUserId());
                info.setAuth(memberResponse.getAuth());
                log.info("Session Info: " + info);

                session = request.getSession();
                session.setAttribute("member", info);
            } else {
                log.info("Login Failure");
                info = null;
            }


            return new ResponseEntity<UserInfo>(info, HttpStatus.OK);


        }

}
