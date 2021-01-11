import { Component, OnInit } from '@angular/core';
import { SymbolCodes } from '../utils/app.constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  SYMBOL_CODES = SymbolCodes;
  constructor() { }

  ngOnInit() {
  }

}
