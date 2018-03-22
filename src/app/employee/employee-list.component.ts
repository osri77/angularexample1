import { Component, OnInit } from '@angular/core';
import { Iemployee } from './iemployee';
import {EmployeeService} from './employee-service.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  constructor(private _empService:EmployeeService) { }
  employees: Iemployee[];
/*
  employees: Iemployee[] = [
    {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '6/25/1988'
    },
    {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    },
    {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '12/8/1979'
    },
    {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '10/14/1980'
    },
];
*/
// This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmployeeCountRadioButton: string = 'All';

    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
      console.log("onEmployeeCountRadioButtonChange Selected")

      this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }


  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Male').length;
  }

  getFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Female').length;
  }

  ngOnInit() {
  //  this.employees = this._empService.getEmployees();
  this._empService.getEmployees().subscribe(data=>this.employees = data)
  }

}
