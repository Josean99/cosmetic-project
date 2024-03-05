import { Component } from '@angular/core';
import { JoinNewsletterComponent } from './join-newsletter/join-newsletter.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [JoinNewsletterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
