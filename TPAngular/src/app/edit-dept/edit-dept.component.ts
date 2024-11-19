import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from './../department.service';

@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.scss']
})
export class EditDeptComponent implements OnInit {
  department = { id: 0, name: '' };

  constructor(private route: ActivatedRoute, private router: Router, private departmentService: DepartmentService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const department = this.departmentService.getDepartments().find(dept => dept.id === +id);
    if (department) {
      this.department = { ...department };
    }
  }

  updateDepartment() {
    this.departmentService.updateDepartment(this.department);
    this.router.navigate(['/departement']);
  }

  cancel() {
    this.router.navigate(['/departement']);
  }
}
