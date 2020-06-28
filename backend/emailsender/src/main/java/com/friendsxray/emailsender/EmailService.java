package com.friendsxray.emailsender;

import org.springframework.stereotype.Component;

@Component
public interface EmailService {

    public void sendSimpleMessage( EmailDTO emailDTO);
}

