package com.friendsxray.emailsender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;


@Service
@Validated
public class EmailServiceImpl implements EmailService {

    @Autowired
    JavaMailSender emailSender;

    private static final String NOREPLY_ADDRESS = "akgfriends@gmail.com";

    private static final String text = "";

    public void sendSimpleMessage(@Valid @NotEmpty EmailDTO emailDTO) {
        try {
            String text = "You have received an enquiry on Your website Friendsxray.com. We are sending you an email on behalf of them" +
                    "The email sender name is" + emailDTO.getName();
            if(emailDTO.getEmail() != null){
                text = text.concat("The Email of the sender is " + emailDTO.getEmail());
            }
            if(emailDTO.getPhoneNumber() != null){
                text = text.concat("The phone Number of the sender is" + emailDTO.getPhoneNumber());
            }
            text = text.concat("Message received from sender is" + emailDTO.getMessage());
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(NOREPLY_ADDRESS);
            message.setTo("aneesh.kapur18@gmail.com");
            message.setSubject("Web Enquiry from " + emailDTO.getName());
            message.setText(text);

            emailSender.send(message);
        } catch (MailException exception) {
            exception.printStackTrace();
        }
    }
}
