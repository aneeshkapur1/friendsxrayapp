import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor( private route : Router) { }

  ngOnInit(): void {
  }

  navigateToTests(): void {
    this.route.navigate(["/tests"]);
  }

  navigateToHome(): void {
    this.route.navigate(["/home"])
  }

}
