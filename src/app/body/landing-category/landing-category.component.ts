import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-category',
  standalone: true,
  imports: [],
  templateUrl: './landing-category.component.html',
  styleUrl: './landing-category.component.scss'
})
export class LandingCategoryComponent {
  @Input({required : true}) category? : ICategory;
}

export interface ICategory{
    id : string, //Uuid
    name : string,
    icon : string
  }
