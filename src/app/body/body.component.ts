import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { LandingCategoryComponent } from './landing-category/landing-category.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [WelcomeComponent, LandingCategoryComponent, BestSellersComponent, CustomerReviewComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
