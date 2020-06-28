import { Component, OnInit, ɵɵNgOnChangesFeature, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';
import { CovidData } from '../CovidData';

@Component({
  selector: 'app-covid19india',
  templateUrl: './covid19india.component.html',
  styleUrls: ['./covid19india.component.css']
})
export class Covid19indiaComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit{

  data:Array<CovidData>;
  confirmedCases :any;
  activeCases :any;
  recoveredCases :any;
  deaths: any;

  constructor(private CovidService: CovidserviceService) {
    this.data =[];
   }

  ngOnInit(): void {
    this.CovidService.getCovidConfirmedCases().subscribe((data) => {
      if(data.length === 0){
        console.log('No Covid Data Received');
      }
      else{
      this.confirmedCases =  data[data.length-1]['Cases'];
      console.log(this.confirmedCases);
      }
    })

  this.CovidService.getCovidRecoveredCases().subscribe(
    (data) => {
      if(data.length === 0){
        console.log('No Covid Data Received');
      }
      else{
      this.recoveredCases =  data[data.length-1]['Cases'];
      console.log(this.recoveredCases);
      }
    });

    this.CovidService.getCovidDeathCases().subscribe(
      (data) => {
        if(data.length === 0){
          console.log('No Covid Data Received');
        }
        else{
        this.deaths =  data[data.length-1]['Cases'];
        console.log(this.confirmedCases - this.recoveredCases - this.deaths)
        this.activeCases = this.confirmedCases - this.recoveredCases - this.deaths;
        }
      }

      
    )

    if(isNaN(this.activeCases)){
      this.activeCases = this.confirmedCases - this.recoveredCases - this.deaths;
    }
  

 
  }

  ngOnChanges():void {
    
    if(isNaN(this.activeCases)){
      this.activeCases = this.confirmedCases - this.recoveredCases - this.deaths;
    }
  }

  ngAfterContentInit():void {

    if(isNaN(this.activeCases)){
      this.activeCases = this.confirmedCases - this.recoveredCases - this.deaths;
    }
  }

  ngAfterViewInit():void {
    
    if(isNaN(this.activeCases)){
      this.activeCases = this.confirmedCases - this.recoveredCases - this.deaths;
    }
  }

}
