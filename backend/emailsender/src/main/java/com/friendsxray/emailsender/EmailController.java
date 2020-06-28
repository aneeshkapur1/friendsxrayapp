package com.friendsxray.emailsender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;

@RestController
@Validated
@CrossOrigin("*")
public class EmailController {

    @Autowired
    EmailService emailService;

    @PostMapping(value = "/email")
    public void sendEmail(@Valid @NotEmpty(message = "Email sending object cannot be null") @RequestBody EmailDTO emailDTO) {
        emailService.sendSimpleMessage(emailDTO);
    }

    @GetMapping(value = "/test")
    public String testService(){
        return "test";
    }
}
