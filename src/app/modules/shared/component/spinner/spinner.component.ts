import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-shared',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() showSpinner:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
