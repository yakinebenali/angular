import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-list-dept',
  templateUrl: './list-dept.component.html',
  styleUrls: ['./list-dept.component.scss']
})
export class ListDeptComponent implements OnInit {
  departments: any[] = [];

  constructor(private router: Router, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
  }

  showAddDepartmentForm() {
    this.router.navigate(['/departement/ajouter']);
  }

  editDepartment(department: any) {
    this.router.navigate(['/departement/modifier', department.id]);
  }

  deleteDepartment(id: number) {
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce département ?");
    if (confirmation) {
      this.departments = this.departments.filter(dept => dept.id !== id);
    }
  }
}
