import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'src/app/restaurants.service';
import { Review } from '../review.model';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  restaurant: Restaurant = {id: '', name: ''};
  reviews: Review[] = [];

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const restaurantId = params.get('restaurantId');
      console.log(`Getting reviews for id: ${restaurantId}`);

      this.restaurantService.getReviews(restaurantId)
      .subscribe(r => {
        this.reviews = r;

        const thisRestaurant = this.restaurantService.getRestaurantById(restaurantId);

        if (!thisRestaurant) {
          this.restaurantService.getRestaurants()
            .subscribe(rs => {
              this.restaurant = rs.filter(x => x.id === restaurantId)[0];
            });
        } else {
          this.restaurant = thisRestaurant;
        }
      });
    });
  }

}
