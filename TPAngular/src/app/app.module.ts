import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Ajoutez ReactiveFormsModule ici
import { AppRootComponent } from './app-root/app-root.component';
import { AjoutHotelComponent } from './ajout-hotel/ajout-hotel.component';
import { ListDeptComponent } from './list-dept/list-dept.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { EditDeptComponent } from './edit-dept/edit-dept.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    ExerciceComponent,
    AppRootComponent,
    AjoutHotelComponent,
    ListDeptComponent,
    ListEmpComponent,
    AddEmpComponent,
    AddDeptComponent,
    EditEmpComponent,
    EditDeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }