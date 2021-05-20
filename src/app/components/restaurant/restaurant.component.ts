import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../restaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants: Restaurant[] = [];
  restaurant = {
    id: 0,
    name: '',
    address: '',
    description: ''
  }
  submitted = false;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  onSubmit(){
    this.submitted = true;
    this.restaurantService.addRestaurant(this.restaurant as Restaurant).subscribe(restaurant => this.restaurant = restaurant);
  }
}
