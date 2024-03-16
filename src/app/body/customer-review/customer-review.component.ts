import { Component, Input } from '@angular/core';
import { StarsPipe } from '../../shared-components/stars.pipe';

@Component({
  selector: 'app-customer-review',
  standalone: true,
  imports: [StarsPipe],
  templateUrl: './customer-review.component.html',
  styleUrl: './customer-review.component.scss'
})
export class CustomerReviewComponent {
  @Input({required : true}) customerReview?: ICustomerReview;  
  Arr = Array; //Array type captured in a variable  
}

export interface ICustomerReview{
    id : string, //Uuid
    stars : number,
    text : string,
    customerName : string
  }


