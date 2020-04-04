import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from './restaurants/reviews/reviews.component';

const routes: Routes = [
  { path: '', component: RestaurantsComponent},
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'reviews/:restaurantId', component: ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
