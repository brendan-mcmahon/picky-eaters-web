import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Restaurant } from './restaurants/restaurant.model';
import { Review } from './restaurants/review.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private cachedRestaurants: Restaurant[] = [];

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    const response = this.http.get<Restaurant[]>('https://picky-eaters-api.herokuapp.com/restaurants');
    response.subscribe(r => this.cachedRestaurants = r);
    return response;
  }

  getRestaurantById(restaurantId: string): Restaurant {
    return this.cachedRestaurants.filter(r => r.id === restaurantId)[0];
  }

  getReviews(restaurantId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`https://picky-eaters-api.herokuapp.com/reviews/${restaurantId}`);
  }
}
