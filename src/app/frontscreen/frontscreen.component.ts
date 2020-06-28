import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontscreen',
  templateUrl: './frontscreen.component.html',
  styleUrls: ['./frontscreen.component.css']
})
export class FrontscreenComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  routeToAbout():void {
  this.route.navigate(["aboutus"])
  }

}
