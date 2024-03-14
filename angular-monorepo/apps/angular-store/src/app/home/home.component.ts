import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Home Works';
}
