import { Component, OnInit } from '@angular/core';
import { Review } from '../../review.model';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  people = ['Brendan', 'Jamie'];

  model = new Review();

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
