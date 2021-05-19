import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RestaurantService } from '../../services/restaurant.service';
import { ReviewService } from '../../services/review.service';
import { Restaurant } from '../../restaurant';
import { Review } from '../../review';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant?: Restaurant;
  reviews: Review[];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private reviewService: ReviewService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRestaurant();
    this.getReviews();
  }

  goBack(): void {
    this.location.back();
  }

  getRestaurant(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurantService.getRestaurant(id).subscribe(restaurant => this.restaurant = restaurant)
  }

  getReviews(): void {
    this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews.filter(review => review.ratingRestaurant.id === this.restaurant.id));
  }

}
