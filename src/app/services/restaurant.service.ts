import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<any>("http://localhost:8080/restaurants");
  }

  getRestaurant(id: Number): Observable<Restaurant> {
    return this.http.get<any>(`http://localhost:8080/restaurants/${id}`);
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    console.log(JSON.stringify(restaurant));
    return this.http.post<any>("http://localhost:8080/add/restaurant", JSON.stringify(restaurant), this.httpOptions);
  }

}
