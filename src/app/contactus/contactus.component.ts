import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Email } from './Email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  myContactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    message: new FormControl('')
  });

  mail : Email = new Email();

  showAlert = false;

  constructor(private emailService: EmailService) {
   }


private sendMail()
{
  this.emailService.sendEmail(this.mail).subscribe(data => console.log(data));
}
  ngOnInit(): void {
  }

  onSubmit() {
    this.showAlert = true;
    this.sendMail();
  }


}
