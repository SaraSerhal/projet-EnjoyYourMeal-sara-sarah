import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  restaurants = [
    { name: 'BURGER KING ', description: 'Plats délicieux et service rapide', image: 'assets/i1.png' },
    { name: 'SUSHI TIME ', description: 'Une expérience culinaire unique', image: 'assets/i3.webp' },
    { name: 'PIZZA HUT ', description: 'Saveurs authentiques et ingrédients frais', image: 'assets/i2.jpg' }
  ];
}
