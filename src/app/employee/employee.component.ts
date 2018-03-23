import { Component, OnInit } from '@angular/core';
import {Iemployee} from './iemployee';
import {EmployeeService} from './employee-service.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  /*firstName: string = "Srinivas";
  lastName: string = "Oruganti";
  gender: string = "Male";
  age: number = 40;
  showDetails: boolean = false;
  */

  constructor(private _employeeService:EmployeeService, private _activatedRoute:ActivatedRoute, private _router:Router) { }
  employee: Iemployee;
  statusMessage: string = 'Loading data. Please wait...';
  ngOnInit() {
    let empCode: string = this._activatedRoute.snapshot.params['code'];

    this._employeeService.getEmployeeByCode(empCode)
            .subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage =
                        'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData;
                }
            },
            (error) => {
                this.statusMessage =
                    'Problem with the service. Please try again after sometime';
                console.error(error);
            });
    }


/*
  getFullName(): string{
    return this.firstName + ' ' + this.lastName
}

toggleDetails(): void {
    this.showDetails = !this.showDetails;
}
*/

onBackButtonClick():void{
  this._router.navigate(["/employees"]);
}


}
