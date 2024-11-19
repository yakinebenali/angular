import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    { id: 1, name: 'Alice', department: 'Ressources Humaines' },
    { id: 2, name: 'Bob', department: 'Informatique' },
    { id: 3, name: 'Charlie', department: 'Marketing' }
  ];

  // Récupère la liste des employés
  getEmployees() {
    return this.employees;
  }

  // Ajoute un nouvel employé
  addEmployee(employee: any) {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
  }

  // Met à jour un employé existant
  updateEmployee(employee: any) {
    const index = this.employees.findIndex(e => e.id === employee.id);
    if (index > -1) {
      this.employees[index] = employee;
    }
  }
}
