import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { ICategory, LandingCategoryComponent } from './landing-category/landing-category.component';
import { CustomerReviewComponent, ICustomerReview } from './customer-review/customer-review.component';
import { IProduct, ProductComponent } from './product/product.component';

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss',
    imports: [WelcomeComponent, LandingCategoryComponent, CustomerReviewComponent, ProductComponent]
})
export class BodyComponent {

  bestSellerProductList: IProduct[] = [
    {id: "83ecf654-6894-4ac4-a0bb-c5077b5070bd",name : "Radiance Glow Serum 1",image:"images/products/serum1.png",price : 40},
    {id: "e14d7a57-a742-4e08-bc65-b9b47fb8b680",name : "Radiance Glow Serum 2",image:"images/products/serum2.png",price : 30},
    {id: "177cca18-210b-43f5-9a6a-add193533a95",name : "Radiance Glow Serum 3",image:"images/products/serum3.png",price : 20}
  ]

  categoryList: ICategory[] = [
    {id: "019e3b88-2c5c-4061-ab26-5aaf82e6232a",name : "Serum",icon:"icons/serum.png"},
    {id: "ab211935-c6f3-43a6-bb86-43aa35b8efb2",name : "Cleanser",icon:"icons/cleanser.png"},
    {id: "f800931d-06bc-48b2-8d15-3f1e6739e69d",name : "Cream",icon:"icons/cream.png"}
  ]
  
  customerReviews: ICustomerReview[] = [
    {id: "6acbf593-550e-44fa-9cff-f4d92f412b7d", customerName: "Jim Halpert",stars: 2.5, text: "Finally found products that work for my sensitive skin. Highly recommend"},
    {id: "72075b6c-425e-46b4-a2be-24a1e4d6272e", customerName: "Pam Beesley",stars: 1, text: "Incredible quality and fast shipping! Will definitely shop here again."},
    {id: "6c839c25-7670-4d9c-9e37-cf2c163fb3c8", customerName: "Michael Scott",stars: 4, text: "Love the variety and top-notch customer service. Highly recommend"},
    {id: "b81bce95-b5ea-4d34-a5d0-1c4a1c32b740", customerName: "Dwight Schrute",stars: 5, text: "Visible results in just a few weeks. Impressed with the skincare range"},
    {id: "e0172482-6640-4665-b431-0adc66428217", customerName: "Andy Bernard",stars: 1, text: "Cruelty-free and environmentally friendly. Love supporting this brand"},
  ]

  customerReviewsSplited :ICustomerReview[][] = []  
  
  constructor(){
    this.customerReviewsSplited = paginateArray(this.customerReviews,3);
  }

  

}
  let paginateArray = function (array:any[], itemsPerPage: number) {
    let result : any[][] = [];
    let i = 0;
    while (array.length != 0) {
      result[i] = array.splice(0,itemsPerPage);
      i++;      
    }
    console.log(result);
    return result;
  };

  

  

