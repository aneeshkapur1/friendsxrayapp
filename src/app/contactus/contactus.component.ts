import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  myContactForm = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
    phoneNumber: new FormControl(''),
    message: new FormControl('')
  });

  constructor() { }



  ngOnInit(): void {
  }

}
