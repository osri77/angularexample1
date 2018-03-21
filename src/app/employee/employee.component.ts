import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstName: string = "Srinivas";
  lastName: string = "Oruganti";
  gender: string = "Male";
  age: number = 40;
  showDetails: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  getFullName(): string{
    return this.firstName + ' ' + this.lastName
}

toggleDetails(): void {
    this.showDetails = !this.showDetails;
}

}
