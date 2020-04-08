import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['../app.component.scss', './restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];

  displayAddForm = false;

  newRestaurantName: string;

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getRestaurants()
      .subscribe(r => {
        this.restaurants = r;
      });
  }

  toggleAddForm() {
    this.displayAddForm = !this.displayAddForm;
  }

  submitNewRestaurant() {
    this.restaurantsService.addRestaurant(this.newRestaurantName)
      .subscribe({
        next: data => this.restaurants.push(data),
        error: error => console.error('There was an error!', error)
    })
  }
}
