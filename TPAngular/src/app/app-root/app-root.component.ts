

import { Component } from '@angular/core';

@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.scss'
})
export class AppRootComponent {
  hotels=[ 
    { name: 'Iberostar Selection Kantaoui Bay', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/73/04/f6/iberostar-selection-kantaoui.jpg?w=1200&h=-1&s=1',prix:50 },
    { name: 'JAZ Tour Khalef Hotel', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/72/23/46/jaz-tour-khalef-thalasso.jpg?w=1000&h=-1&s=1' ,prix:100},
    { name: 'La Cigale Tabarka Hotel Thalasso Spa & Golf', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/88/93/c6/la-cigale-tabarka.jpg?w=1200&h=-1&s=1' ,prix:80},
    { name: 'Photos de The Residence Tunis', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/79/e1/30/the-residence-tunis.jpg?w=1200&h=-1&s=1' ,prix:500}
  ];
  //hotels: Hotel[] = [];
}


interface Hotel {
  name: string;
  imageUrl: string;
  prix:number;
}
