import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-page-medic',
  templateUrl: './page-medic.component.html',
  styleUrls: ['./page-medic.component.css']
})
//se exporta para que el page medic se pueda utilizar desde appmodule
export class PageMedicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
