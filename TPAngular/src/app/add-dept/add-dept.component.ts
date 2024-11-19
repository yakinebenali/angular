import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from './../department.service';

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.scss']
})
export class AddDeptComponent {
  department = { name: '' };

  constructor(private router: Router, private departmentService: DepartmentService) {}

  saveDepartment() {
    this.departmentService.addDepartment(this.department);
    this.router.navigate(['/departement']);
  }

  cancel() {
    this.router.navigate(['/departement']);
  }
}
