import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent {
  employee = { name: '', department: '' };

  constructor(private router: Router, private employeeService: EmployeeService) {}

  saveEmployee() {
    this.employeeService.addEmployee(this.employee);
    this.router.navigate(['/employee']);
  }

  cancel() {
    this.router.navigate(['/employee']);
  }
}
