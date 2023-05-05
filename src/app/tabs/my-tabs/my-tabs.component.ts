import { Component } from '@angular/core';

@Component({
  selector: 'app-my-tabs',
  templateUrl: './my-tabs.component.html',
  styleUrls: ['./my-tabs.component.css'],

})
export class MyTabsComponent {
  plane!:string;
  amountList:string = 'seleziona';
  payMethod!:string;
}
