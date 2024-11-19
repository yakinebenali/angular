import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../employee.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.scss']
})
export class EditEmpComponent implements OnInit {
  employee = { id: 0, name: '', department: '' };

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const employee = this.employeeService.getEmployees().find(emp => emp.id === +id);
    if (employee) {
      this.employee = { ...employee };
    }
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee);
    this.router.navigate(['/employee']);
  }

  cancel() {
    this.router.navigate(['/employee']);
  }
}
