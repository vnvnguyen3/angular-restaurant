import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<any>("http://localhost:8080/restaurants");
  }

  getRestaurant(id: Number): Observable<Restaurant> {
    return this.http.get<any>(`http://localhost:8080/restaurants/${id}`);
  }

}
