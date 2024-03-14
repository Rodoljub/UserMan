import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable, map, pipe } from 'rxjs';
import { WeatherForecast } from './weather.model';

@Injectable({providedIn: 'root'})
export class HomeApiService {
    apiUrl = environment.apiUrl;
    weatherSegment = '/WeatherForecast'
    constructor(private httpClient: HttpClient) { }

    getWeather(): Observable<WeatherForecast[]> {
        return this.httpClient.get<WeatherForecast[]>(`${this.apiUrl}${this.weatherSegment}`)
                    .pipe(map(x => x));
    }
    
}