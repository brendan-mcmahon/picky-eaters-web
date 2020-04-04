import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getRestaurants()
      .subscribe(r => {
        this.restaurants = r;
      });
  }

  getRestaurants(): void {

  }

}
