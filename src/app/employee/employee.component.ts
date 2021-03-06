import { Component, OnInit } from '@angular/core';
import {Iemployee} from './iemployee';
import {EmployeeService} from './employee-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import {ISubscription} from 'rxjs/Subscription';

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
  subscription: ISubscription;
  ngOnInit() {
    let empCode: string = this._activatedRoute.snapshot.params['code'];

    this.subscription = this._employeeService.getEmployeeByCode(empCode)
    .retryWhen((err) => {
      return err.scan((retryCount, val) => {
          retryCount += 1;
          if (retryCount < 6) {
              this.statusMessage = 'Retrying...Attempt #' + retryCount;
              return retryCount;
          }
          else {
              throw (err);
          }
      }, 0).delay(1000)
      })

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

onCancelButtonClick():void{
  this.subscription.unsubscribe();
  this.statusMessage = "Request Cancelled";
}


}
