import { Component} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { customOptionsSingle } from '../constant';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent{
  public customOptionsSingle: OwlOptions = customOptionsSingle;
}
