import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.scss']
})
export class ListEmpComponent implements OnInit {
  employees: any[] = [];

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  showAddEmployeeForm() {
    this.router.navigate(['/employee/ajouter']);
  }

  editEmployee(employee: any) {
    this.router.navigate(['/employee/modifier', employee.id]);
  }

  deleteEmployee(id: number) {
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cet employé ?");
    if (confirmation) {
      this.employees = this.employees.filter(emp => emp.id !== id);
    }
  }
}
