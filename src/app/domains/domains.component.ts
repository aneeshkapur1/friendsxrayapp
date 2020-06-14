import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToPathology() : void{
    this.router.navigate(["pathology"])
  }

  routeToRadiology() : void{
    this.router.navigate(["radiology"])
  }

  routeToNeurology() : void{
    this.router.navigate(["neurology"])
  }

}
