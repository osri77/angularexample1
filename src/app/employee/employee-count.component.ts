import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  all: number = 10;
  male: number = 5;
  female: number = 5;

  constructor() { }

  ngOnInit() {
  }

}
