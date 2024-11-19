import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments = [
    { id: 1, name: 'Ressources Humaines' },
    { id: 2, name: 'Informatique' },
    { id: 3, name: 'Marketing' }
  ];

  // Récupère la liste des départements
  getDepartments() {
    return this.departments;
  }

  // Ajoute un nouveau département
  addDepartment(department: any) {
    department.id = this.departments.length + 1;
    this.departments.push(department);
  }

  // Met à jour un département existant
  updateDepartment(department: any) {
    const index = this.departments.findIndex(d => d.id === department.id);
    if (index > -1) {
      this.departments[index] = department;
    }
  }
}
