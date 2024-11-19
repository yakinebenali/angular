import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss'] 
})
export class ExerciceComponent implements OnInit {
  saisie: string = ''; 

  constructor() { }

  ngOnInit(): void { }

  afficherMessage() {
    console.log("Salut tout le monde");
  }
}
