import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeePipe'
})
export class EmployeePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
