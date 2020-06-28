package com.friendsxray.emailsender;

import lombok.Builder;
import lombok.Data;
import org.springframework.lang.NonNull;

import javax.validation.constraints.NotEmpty;

@Data
@Builder
public class EmailDTO {

    @NotEmpty(message = "Message Sender Name cannot be Empty")
    private String name;
    private String phoneNumber;
    private String email;
    @NotEmpty(message = "Message Query cannot be Empty")
    private String message;
}
