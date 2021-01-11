import { Component, OnInit } from '@angular/core';
import { SectorPerformance, SectorPerformances, SymbolCodes } from '../utils/app.constants';
import {ObjectService} from '../services/object.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  codes = SymbolCodes;
  ObjectListing = [];
  sectorPerformance = SectorPerformance;
  sectorPerformances = SectorPerformances;

  constructor(
    private readonly objectService: ObjectService
  ) { }

  ngOnInit() {
    this.getCodes();
  }

  getCodes(): void {
    this.codes.forEach((code) => {
      setTimeout(() => {
        this.objectService.objectDetails(code).subscribe(
          (result: ObjectModel) => {
            this.ObjectListing.push(result);
          }, (error) => {
            
          }
        )
      }, 2000)
    })
    console.log(this.ObjectListing);
  }

  checkInt(object: string){
    if(object.startsWith('-')){
      return true;
    }
     else {
      return false;
    }
  }

}
