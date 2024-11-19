import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDeptComponent } from './list-dept/list-dept.component';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { EditDeptComponent } from './edit-dept/edit-dept.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';

const routes: Routes = [
  { path: 'departement', component: ListDeptComponent },
  { path: 'departement/ajouter', component: AddDeptComponent },
  { path: 'departement/modifier/:id', component: EditDeptComponent },
  { path: 'employee', component: ListEmpComponent },
  { path: 'employee/ajouter', component: AddEmpComponent },
  { path: 'employee/modifier/:id', component: EditEmpComponent },
  { path: '', redirectTo: '/departement', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
