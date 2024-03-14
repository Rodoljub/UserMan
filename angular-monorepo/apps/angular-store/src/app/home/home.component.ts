import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeApiService } from './home.api.service';
import { Observable } from 'rxjs';
import { WeatherForecast } from './weather.model';

@Component({
  selector: 'angular-monorepo-home',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title = 'Home Works';
  weather$!: Observable<WeatherForecast[]>;

  constructor(
    private homeApi: HomeApiService
  ) {}

  ngOnInit(): void {
     this.weather$ = this.homeApi.getWeather()

     console.log(this.weather$)
        
        
  }
}
