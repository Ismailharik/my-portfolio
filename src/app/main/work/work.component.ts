import { Component } from '@angular/core';
import { options } from '../constant';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  public customOptions: OwlOptions = options;
}
